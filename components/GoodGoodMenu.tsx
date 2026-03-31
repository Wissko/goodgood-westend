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
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [open])

  return (
    <>
      {/* Trigger pill — fixed top-left, always visible */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.2 }}
        style={{
          ...syne,
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 200,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: '#2C2C2C',
          border: '1.5px solid rgba(196, 114, 74, 0.5)',
          borderRadius: '999px',
          padding: '9px 16px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.22)',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <span style={{ ...syne, fontSize: '13px', color: '#F0A830', letterSpacing: '0.05em', lineHeight: 1 }}>GG</span>
        <span style={{ display: 'block', width: '1px', height: '13px', background: 'rgba(237,232,223,0.25)' }} />
        <span style={{
          fontFamily: 'var(--font-syne-var), sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#EDE8DF',
        }}>Menu</span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ display: 'block', height: '1.5px', width: '15px', background: '#EDE8DF' }} />
          <span style={{ display: 'block', height: '1.5px', width: '9px', background: '#EDE8DF' }} />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 190,
              backgroundColor: '#2C2C2C',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            onClick={() => setOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                zIndex: 10,
              }}
            >
              <span style={{
                fontSize: '0.58rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#EDE8DF',
                fontFamily: 'var(--font-syne-var)',
                fontWeight: 700,
              }}>Close</span>
              <span style={{ display: 'block', width: '1.1rem', height: '1px', backgroundColor: '#EDE8DF' }} />
            </button>

            {/* Nav links */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                padding: 'clamp(5rem, 12vw, 8rem) clamp(1.5rem, 6vw, 3.5rem) clamp(3rem, 8vw, 5rem)',
                gap: '0',
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  style={{ borderBottom: '1px solid rgba(237,232,223,0.08)' }}
                >
                  <Link
                    href={link.href}
                    style={{
                      ...syne,
                      display: 'block',
                      fontSize: 'clamp(2rem, 8vw, 5.5rem)',
                      lineHeight: 1.2,
                      padding: 'clamp(0.6rem, 2vw, 1rem) 0',
                      color: pathname === link.href ? '#F0A830' : '#EDE8DF',
                      transition: 'color 0.15s',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom info */}
            <div
              style={{
                padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 6vw, 3.5rem)',
                color: '#A8B5A2',
                fontFamily: 'var(--font-inter-var), sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                lineHeight: 1.7,
                borderTop: '1px solid rgba(237,232,223,0.08)',
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
