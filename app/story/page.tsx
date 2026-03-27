'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TIMELINE = [
  {
    year: '2023',
    text: 'GoodGood opens at 2/24 Beesley St in a converted warehouse. Lachie and Josh wanted a neighbourhood spot — honest food, great coffee, no pretension.',
  },
  {
    year: '2025',
    text: 'A full reno refreshes the space while keeping its raw, high-ceiling character. Same crew. Same coffee. Better everything.',
  },
]

export default function StoryPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F4EF' }}>
      {/* ── Page header ── */}
      <div
        style={{
          padding:
            'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)',
          maxWidth: '720px',
        }}
      >
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
            marginBottom: '2.5rem',
          }}
        >
          Our
          <br />
          Story
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

        {/* Timeline */}
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
              <p
                style={{
                  fontFamily: 'var(--font-syne-var), sans-serif',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#C4724A',
                  paddingTop: '0.1rem',
                }}
              >
                {m.year}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter-var), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  color: '#2C2C2C',
                }}
              >
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── The Craft ── full-width citation.jpg with overlay ── */}
      <section style={{ position: 'relative', height: 'clamp(300px, 55vw, 640px)', overflow: 'hidden' }}>
        <Image
          src="/images/citation.jpg"
          alt="Floured dough balls — Japanese milk bun technique"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.52)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C4724A',
              marginBottom: '1rem',
            }}
          >
            The Craft
          </p>
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 4vw, 3rem)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              maxWidth: '640px',
              letterSpacing: '-0.01em',
            }}
          >
            Japanese milk bun technique
          </p>
          <p
            style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '480px',
              lineHeight: 1.65,
            }}
          >
            Every bun begins with the same care — hand-shaped, slow-proofed, baked to order.
          </p>
        </motion.div>
      </section>

      {/* ── The Technique ── japanesexplication + tangzhong side by side ── */}
      <section
        style={{
          padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop: '1px solid #EDE8DF',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: 'var(--font-syne-var), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            lineHeight: 1,
            color: '#2C2C2C',
            marginBottom: '2rem',
            letterSpacing: '-0.02em',
          }}
        >
          The Technique
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}
          >
            <Image
              src="/images/japanesexplication.jpg"
              alt="Shokupan buns with cream and jam — explanatory"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
            style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}
          >
            <Image
              src="/images/tangzhong.jpg"
              alt="Cooling rack of pastries and rolls — tangzhong process"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Quote section with grainecafe.jpg texture ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(3rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
          backgroundColor: '#2C2C2C',
        }}
      >
        {/* Coffee grain texture */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/grainecafe.jpg"
            alt=""
            fill
            unoptimized
            aria-hidden
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
          />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              lineHeight: 1.25,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            "We don't cut corners on the bread. If you can taste the difference, it was worth it."
          </p>
          <p
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C4724A',
            }}
          >
            — Lachlan Geraghty, co-founder
          </p>
        </motion.blockquote>
      </section>
    </main>
  )
}
