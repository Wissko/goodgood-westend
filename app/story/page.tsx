'use client'

import { motion } from 'framer-motion'

const TIMELINE = [
  { year: '2023', text: 'GoodGood opens at 2/24 Beesley St in a converted warehouse. Lachie and Josh wanted a neighbourhood spot — honest food, great coffee, no pretension.' },
  { year: '2025', text: 'A full reno refreshes the space while keeping its raw, high-ceiling character. Same crew. Same coffee. Better everything.' },
]

export default function StoryPage() {
  return (
    <main style={{ minHeight: '100vh', padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)' }}>
      <div style={{ maxWidth: '720px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-syne-var), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            lineHeight: 0.92,
            color: '#2C2C2C',
            letterSpacing: '-0.02em',
            marginBottom: '3.5rem',
          }}
        >
          Our<br />Story
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            fontFamily: 'var(--font-inter-var), sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
            lineHeight: 1.75,
            color: '#2C2C2C',
          }}
        >
          <p>
            GoodGood started with two mates and a shared obsession with good coffee and honest food.{' '}
            <strong style={{ fontWeight: 500 }}>Lachlan Geraghty</strong> and{' '}
            <strong style={{ fontWeight: 500 }}>Josh Power</strong> — both alumni of Little Peaches —
            set out to build something rooted in the neighbourhood.
          </p>
          <p>
            The space is a converted warehouse on Beesley Street — high ceilings, raw textures, big
            windows. Not precious. Not performative. Just a place that feels good to be in.
          </p>
          <p>
            The coffee comes from <strong style={{ fontWeight: 500 }}>Tim Adams</strong> — specialty
            beans, sourced with care, dialled in daily. The food is made in-house: slow-cooked oats,
            proper avocado toast, deli meats and cheeses sliced fresh at the counter, lasagne that
            people come back for.
          </p>
          <p>
            GoodGood is a safe space, a morning haunt, a community hub.{' '}
            <em style={{ fontStyle: 'normal', color: '#C4724A' }}>
              Bold flavours, great vibes, better coffee.
            </em>
          </p>
        </motion.div>

        <div style={{ marginTop: '4rem' }}>
          {TIMELINE.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '4rem 1fr',
                gap: '1.5rem',
                padding: '1.5rem 0',
                borderTop: '1px solid #EDE8DF',
              }}
            >
              <p style={{ fontFamily: 'var(--font-syne-var), sans-serif', fontWeight: 800, fontSize: '1rem', color: '#C4724A', paddingTop: '0.1rem' }}>
                {m.year}
              </p>
              <p style={{ fontFamily: 'var(--font-inter-var), sans-serif', fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.7, color: '#2C2C2C' }}>
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
