'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HOURS = [
  { day: 'Monday', hours: '6:00 am – 1:00 pm' },
  { day: 'Tuesday', hours: '6:00 am – 1:00 pm' },
  { day: 'Wednesday', hours: '6:00 am – 1:00 pm' },
  { day: 'Thursday', hours: '6:00 am – 1:00 pm' },
  { day: 'Friday', hours: '6:00 am – 1:00 pm' },
  { day: 'Saturday', hours: '6:00 am – 1:00 pm' },
  { day: 'Sunday', hours: '7:00 am – 12:00 pm' },
]

export default function VisitPage() {
  const mapsUrl = 'https://maps.google.com/?q=2/24+Beesley+Street,+West+End,+Brisbane'

  return (
    <main style={{ minHeight: '100vh', padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)' }}>
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-heading), sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(4rem, 16vw, 13rem)',
          lineHeight: 0.82,
          color: '#2C2C2C',
          letterSpacing: '0.01em',
          textTransform: 'uppercase',
          marginBottom: '4rem',
        }}
      >
        Find<br />Us
      </motion.h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem 6rem', maxWidth: '900px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A8B5A2', marginBottom: '1rem' }}>
            Address
          </h2>
          <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.3, color: '#2C2C2C', marginBottom: '1.25rem' }}>
            2/24 Beesley Street<br />West End, Brisbane
          </p>
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.75rem',
              backgroundColor: '#F0A830',
              color: '#F7F4EF',
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
          >
            Open in Maps
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.45 }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A8B5A2', marginBottom: '1rem' }}>
            Hours
          </h2>
          {HOURS.map(({ day, hours }) => (
            <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', padding: '0.85rem 0', borderBottom: '1px solid #EDE8DF' }}>
              <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.95rem', color: '#2C2C2C' }}>{day}</span>
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.95rem', color: '#2C2C2C' }}>{hours}</span>
            </div>
          ))}
          <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#2C2C2C', opacity: 0.5 }}>
            Other days TBC — follow @goodgoodwestend for updates.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.45 }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A8B5A2', marginBottom: '1rem' }}>
            Get in touch
          </h2>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.95rem', color: '#2C2C2C', lineHeight: 1.7 }}>
            <a href="tel:+61466629352" style={{ display: 'block', color: '#2C2C2C' }}>+61 466 629 352</a>
            <a href="https://instagram.com/goodgoodwestend" target="_blank" rel="noopener noreferrer" style={{ color: '#F0A830' }}>@goodgoodwestend</a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
