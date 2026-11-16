// Cached server component: keeps the copyright year out of the static-prerender check
export default async function CurrentYear() {
  'use cache'
  return <>{new Date().getFullYear()}</>
}
