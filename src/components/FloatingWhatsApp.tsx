import { useEffect, useRef } from 'react'
import { getWhatsAppUrl } from '../utils/whatsapp'

export function FloatingWhatsApp() {
  const link = useRef<HTMLAnchorElement>(null)
  const slot = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const footer = document.getElementById('rodape')
    if (!footer) return
    const content = Array.from(document.querySelectorAll('main p, main h1, main h2, main h3, main a, main ul'))
    let frame = 0
    function update() {
      frame = 0
      if (!slot.current || !link.current || document.activeElement === link.current) return
      const box = slot.current.getBoundingClientRect()
      const overlaps = content.some((element) => {
        const rect = element.getBoundingClientRect()
        return rect.left < box.right + 8 && rect.right > box.left - 8 && rect.top < box.bottom + 8 && rect.bottom > box.top - 8
      })
      link.current.hidden = overlaps || (footer?.getBoundingClientRect().top ?? Infinity) < window.innerHeight
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update) }
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
  return (
    <div ref={slot} className="floating-whatsapp-slot">
    <a ref={link} hidden className="floating-whatsapp" href={getWhatsAppUrl()} aria-label="Chamar a Auto Executivo no WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.1-4.8A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="m8 7 2 3-1 1c1 2 2 3 4 4l1-1 3 1c-1 4-5 2-7 0s-5-6-2-8Z" />
      </svg>
    </a>
    </div>
  )
}
