import {
  BookOpen,
  Building2,
  ClipboardCheck,
  FileText,
  LineChart,
  PiggyBank,
  Receipt,
  type LucideIcon,
} from 'lucide-react'

// Icon for each service, keyed by its slug in lib/site.ts
export const serviceIcons: Record<string, LucideIcon> = {
  'itr-filing': FileText,
  'gst-registration-returns': Receipt,
  'tax-planning': PiggyBank,
  'audit-assurance': ClipboardCheck,
  'accounting-bookkeeping': BookOpen,
  'company-llp-registration': Building2,
  'financial-advisory': LineChart,
}
