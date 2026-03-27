'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background photo */}
        <Image
          src="/images/maincafe.jpg"
          alt="Barista holding a latte with rosetta art"
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Dark overlay 40% */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.40)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: '100svh',
            padding: 'clamp(1.5rem, 5vw, 4rem)',
            paddingTop: 'clamp(6rem, 10vw, 9rem)',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(5rem, 16vw, 14rem)',
              lineHeight: 0.92,
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
            }}
          >
            Good
            <br />
            Good
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.75rem, 1.4vw, 1rem)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            West End · Brisbane
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              marginTop: '0.75rem',
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 400,
              fontSize: '0.95rem',
              color: '#F0C9A0',
            }}
          >
            Bold flavours, great vibes, better coffee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.4 }}
            style={{ marginTop: '2.5rem', paddingBottom: '3rem' }}
          >
            <Link
              href="/menu"
              style={{
                display: 'inline-block',
                padding: '0.85rem 2.25rem',
                backgroundColor: '#FFFFFF',
                color: '#2C2C2C',
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#C4724A'
                ;(e.currentTarget as HTMLElement).style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF'
                ;(e.currentTarget as HTMLElement).style.color = '#2C2C2C'
              }}
            >
              See the menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Ambiance strip ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}
      >
        <Image
          src="/images/cafebun.jpg"
          alt="Cinnamon roll and latte flat lay"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
              color: '#FFFFFF',
              letterSpacing: '0.04em',
            }}
          >
            A morning ritual. Every day.
          </p>
        </div>
      </motion.section>

      {/* ── Info bar ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#A8B5A2',
          padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
        }}
      >
        {[
          { label: 'Coffee', value: 'Tim Adams specialty coffee' },
          { label: 'Find Us', value: '2/24 Beesley St, West End' },
          { label: 'Friday', value: '6:00 am – 1:30 pm' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p
              style={{
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#2C2C2C',
                marginBottom: '0.4rem',
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter-var), sans-serif',
                fontWeight: 300,
                color: '#2C2C2C',
                fontSize: '0.9rem',
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </motion.section>
    </main>
  )
}
