'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Check, ChevronDown } from 'lucide-react'

type ServiceSelectProps = {
  name: string
  options: string[]
  placeholder?: string
  id?: string
}

// Accessible custom dropdown (listbox pattern). Submits its value through a hidden input,
// so it works with FormData like a native <select>.
const ServiceSelect = ({ name, options, placeholder = 'Select an option', id }: ServiceSelectProps) => {
  const autoId = useId()
  const buttonId = id ?? `${autoId}-button`
  const listId = `${autoId}-list`

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [active, setActive] = useState(0)

  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // Close when clicking outside
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Keep the active option in view and focus the list when opened
  useEffect(() => {
    if (!open) return
    listRef.current?.focus()
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const openList = () => {
    const current = options.indexOf(value)
    setActive(current >= 0 ? current : 0)
    setOpen(true)
  }

  const choose = (index: number) => {
    setValue(options[index])
    setOpen(false)
    buttonRef.current?.focus()
  }

  const onButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openList()
    }
  }

  const onListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActive((i) => Math.min(i + 1, options.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActive((i) => Math.max(i - 1, 0))
        break
      case 'Home':
        e.preventDefault()
        setActive(0)
        break
      case 'End':
        e.preventDefault()
        setActive(options.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        choose(active)
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onButtonKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-md border bg-ivory/5 px-4 py-3 text-left outline-none transition focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 ${
          open ? 'border-gold bg-ivory/10' : 'border-ivory/20'
        }`}
      >
        <span className={`truncate ${value ? 'text-ivory' : 'text-beige/50'}`}>{value || placeholder}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-gold transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={buttonId}
          aria-activedescendant={`${listId}-${active}`}
          onKeyDown={onListKeyDown}
          className="absolute inset-x-0 top-full z-30 mt-2 max-h-[min(26rem,70vh)] overflow-y-auto rounded-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border border-gold/30 bg-[#1d3029] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] outline-none"
        >
          {options.map((option, i) => {
            const selected = option === value
            const isActive = i === active
            return (
              <li
                key={option}
                id={`${listId}-${i}`}
                data-index={i}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2.5 text-[15px] transition-colors ${
                  isActive ? 'bg-ivory/10 text-ivory' : 'text-beige/85'
                } ${selected ? 'text-gold' : ''}`}
              >
                <span>{option}</span>
                {selected && <Check className="size-4 shrink-0 text-gold" aria-hidden="true" />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ServiceSelect
