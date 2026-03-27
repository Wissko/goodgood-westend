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

      {/* ── Page header — dark with grain texture ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#2C2C2C',
          padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)',
        }}
      >
        {/* Grain texture 15% */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          <Image
            src="/images/grainecafe.jpg"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.15 }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: 'var(--font-syne-var), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            lineHeight: 0.88,
            color: '#EDE8DF',
            letterSpacing: '-0.03em',
          }}
        >
          Our /
          <br />
          Story
        </motion.h1>
      </section>

      {/* ── Body text + timeline — fond clair, aéré ── */}
      <section
        style={{
          backgroundColor: '#F7F4EF',
          padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              lineHeight: 1.8,
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
          <div style={{ marginTop: '4.5rem' }}>
            {TIMELINE.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '5rem 1fr',
                  gap: '2rem',
                  padding: '1.75rem 0',
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
                    lineHeight: 1.75,
                    color: '#2C2C2C',
                  }}
                >
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Craft — citation.jpg full-width, image pure ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          height: 'clamp(320px, 65vw, 680px)',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/citation.jpg"
          alt="Floured dough balls — Japanese milk bun technique"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Vignette subtile aux bords uniquement — met le focus au centre */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.28) 100%)',
          pointerEvents: 'none',
        }} />
      </motion.section>

      {/* ── The Technique — two images side by side, no title ── */}
      <section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              position: 'relative',
              height: 'clamp(200px, 45vw, 520px)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/japanesexplication.jpg"
              alt="Shokupan buns with cream and jam"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45 }}
            style={{
              position: 'relative',
              height: 'clamp(200px, 45vw, 520px)',
              overflow: 'hidden',
            }}
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

        {/* Technique tagline — centred, terracotta */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            fontFamily: 'var(--font-syne-var), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: '#C4724A',
            textAlign: 'center',
            letterSpacing: '0.01em',
            padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
            backgroundColor: '#F7F4EF',
          }}
        >
          Hand-shaped. Slow-proofed. Baked fresh.
        </motion.p>
      </section>

      {/* ── Quote section — dark + grain ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
          backgroundColor: '#2C2C2C',
        }}
      >
        {/* Grain texture */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          <Image
            src="/images/grainecafe.jpg"
            alt=""
            fill
            unoptimized
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
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 4vw, 3rem)',
              lineHeight: 1.25,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            "We don&apos;t cut corners on the bread. If you can taste the difference, it was worth it."
          </p>
          <p
            style={{
              marginTop: '2rem',
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
