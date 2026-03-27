'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'The Menu' },
  { href: '/story', label: 'Our Story' },
  { href: '/visit', label: 'Find Us' },
  { href: '/contact', label: 'Say Hi' },
] as const

const syne: React.CSSProperties = {
  fontFamily: 'var(--font-syne-var), sans-serif',
  fontWeight: 800,
}

export default function GoodGoodMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
        style={{
          ...syne,
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 50,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '6px',
          opacity: open ? 0 : 1,
          pointerEvents: open ? 'none' : 'auto',
          transition: 'opacity 0.2s',
          background: 'none',
          border: 'none',
          padding: '8px',
        }}
      >
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2C2C2C' }}>
          Menu
        </span>
        <span style={{ display: 'block', height: '1px', width: '1.75rem', backgroundColor: '#2C2C2C' }} />
        <span style={{ display: 'block', height: '1px', width: '1.1rem', backgroundColor: '#2C2C2C' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: '#2C2C2C',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#EDE8DF', fontFamily: 'var(--font-syne-var)', fontWeight: 700 }}>
                Close
              </span>
              <span style={{ display: 'block', width: '1.25rem', height: '1px', backgroundColor: '#EDE8DF' }} />
            </button>

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                padding: '0 2.5rem',
                gap: '0',
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    style={{
                      ...syne,
                      display: 'block',
                      fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
                      lineHeight: 1.15,
                      color: pathname === link.href ? '#C4724A' : '#EDE8DF',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== link.href)
                        (e.currentTarget as HTMLElement).style.color = '#A8B5A2'
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== link.href)
                        (e.currentTarget as HTMLElement).style.color = '#EDE8DF'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2.5rem',
                color: '#A8B5A2',
                fontFamily: 'var(--font-inter-var), sans-serif',
                fontWeight: 300,
                fontSize: '0.82rem',
                lineHeight: 1.7,
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <p>2/24 Beesley St, West End</p>
              <p>@goodgoodwestend</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
