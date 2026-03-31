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
        <Image
          src="/images/maincafe.jpg"
          alt="Barista holding a latte with rosetta art"
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Gradient: transparent top → dark bottom */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.70) 100%)',
            zIndex: 1,
          }}
        />

        {/* Content anchored at bottom-left */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: '100svh',
            padding: 'clamp(1.25rem, 5vw, 4rem)',
            paddingBottom: 'clamp(2rem, 6vw, 5rem)',
            paddingTop: '5rem',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 13vw, 14rem)',
              lineHeight: 0.88,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              wordBreak: 'keep-all',
              overflow: 'hidden',
            }}
          >
            Good /
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
              fontSize: 'clamp(0.65rem, 1.3vw, 0.9rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            West End · Brisbane
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            style={{ marginTop: '1.75rem' }}
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
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s, color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#F0A830'
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

      {/* ── Section 2 — Split (stacked on mobile, side-by-side on desktop) ── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        }}
      >
        {/* Left: sage colour block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundColor: '#A8B5A2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
            minHeight: 'clamp(260px, 40vw, 480px)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3.5vw, 2.25rem)',
              lineHeight: 1.2,
              color: '#2C2C2C',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Bold flavours.
            <br />
            Great vibes.
            <br />
            Better coffee.
          </p>
        </motion.div>

        {/* Right: cafebun.jpg */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            minHeight: 'clamp(260px, 40vw, 480px)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/cafebun.jpg"
            alt="Cinnamon roll and latte flat lay"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </section>

      {/* ── Section 3 — Info bar ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#2C2C2C',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2.5rem',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Image
            src="/images/grainecafe.jpg"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.12 }}
          />
        </div>

        {[
          { label: 'Coffee', value: 'Tim Adams specialty coffee' },
          { label: 'Find Us', value: '2/24 Beesley St, West End' },
          { label: 'Friday', value: '6:00 am – 1:30 pm' },
        ].map(({ label, value }) => (
          <div key={label} style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 700,
              fontSize: '0.58rem',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#EDE8DF',
              opacity: 0.5,
              marginBottom: '0.5rem',
            }}>
              {label}
            </p>
            <p style={{
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              color: '#EDE8DF',
              fontSize: '0.95rem',
              lineHeight: 1.55,
            }}>
              {value}
            </p>
          </div>
        ))}
      </motion.section>
    </main>
  )
}
