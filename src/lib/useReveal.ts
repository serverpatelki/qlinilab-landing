import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.hasAttribute('data-reveal')
      ? [el]
      : Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (items.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    items.forEach((item, i) => {
      item.style.animationDelay = `${Math.min(i * 60, 300)}ms`
      io.observe(item)
    })
    return () => io.disconnect()
  }, [])

  return ref
}
