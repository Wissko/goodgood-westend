'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type MenuItem = { name: string; desc: string }

const COFFEE: MenuItem[] = [
  { name: 'Espresso', desc: 'Tim Adams specialty — bright, balanced, clean' },
  { name: 'Batch Filter', desc: 'Single origin, rotating — ask your barista' },
  { name: 'Cappuccino', desc: 'Proper milk texture, no frills' },
  { name: 'Flat White', desc: 'The classic, done right' },
  { name: 'Cold Brew', desc: 'House-made, slow-steeped, smooth' },
  { name: 'Matcha Latte', desc: 'Ceremonial grade, oat or whole' },
]

const BAKERY: MenuItem[] = [
  { name: 'Croissant', desc: 'Butter laminated, baked fresh daily' },
  { name: 'Almond Croissant', desc: 'Twice-baked, frangipane, flaked almonds' },
  { name: 'Pain au Chocolat', desc: 'Dark chocolate, crisp pastry layers' },
  { name: 'Cinnamon Roll', desc: 'Pistachio glaze, baked in-house' },
  { name: 'Cruffin', desc: 'Iced, citrus-cured cream filling' },
]

const LIGHT_LUNCH: MenuItem[] = [
  { name: 'Focaccia', desc: 'Herbs, olive oil, seasonal toppings — served with latte or filter' },
  { name: 'Deli Sandwich', desc: "House-sliced meats & cheeses — today's build at the counter" },
  { name: 'Daily Salad', desc: 'Fresh, seasonal, changes every morning' },
  { name: 'Lasagne Maison', desc: 'Made in-house, served warm' },
]

function MenuList({ items, borderColor = '#EDE8DF' }: { items: MenuItem[]; borderColor?: string }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: '1rem 0', borderBottom: `1px solid ${borderColor}` }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#2C2C2C',
              marginBottom: '0.2rem',
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              fontSize: '0.875rem',
              color: '#2C2C2C',
              opacity: 0.65,
            }}
          >
            {item.desc}
          </p>
        </motion.li>
      ))}
    </ul>
  )
}

export default function MenuPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F4EF' }}>

      {/* ── Page header — editorial marker ── */}
      <div
        style={{
          backgroundColor: '#F7F4EF',
          padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}
        >
          {/* Vertical terracotta bar — editorial marker */}
          <div
            aria-hidden="true"
            style={{
              width: '4px',
              backgroundColor: '#C4724A',
              alignSelf: 'stretch',
              flexShrink: 0,
              marginTop: '0.3rem',
            }}
          />
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                lineHeight: 0.9,
                color: '#2C2C2C',
                letterSpacing: '-0.03em',
              }}
            >
              The /
              <br />
              Menu
            </h1>
            <p
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-inter-var), sans-serif',
                fontWeight: 300,
                fontSize: '0.88rem',
                color: '#C4724A',
                letterSpacing: '0.05em',
              }}
            >
              Tim Adams specialty coffee · house-made food · deli counter
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Coffee — 40/60 split ── */}
      <section
        style={{
          borderTop: '1px solid #EDE8DF',
          display: 'grid',
          gridTemplateColumns: '40% 60%',
        }}
      >
        {/* Text 40% */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '4px', backgroundColor: '#C4724A', alignSelf: 'stretch', flexShrink: 0, marginTop: '0.25rem' }} />
            <h2
              style={{
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1,
                color: '#C4724A',
                letterSpacing: '-0.02em',
              }}
            >
              Coffee
            </h2>
          </div>
          <MenuList items={COFFEE} />
        </motion.div>

        {/* Photo 60% — fixed 500px height, no overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', height: '500px', overflow: 'hidden' }}
        >
          <Image
            src="/images/croissantcafe.jpg"
            alt="Butter croissant paired with a latte swan art"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </section>

      {/* ── Morning Bites — 2-col grid ── */}
      <section
        style={{
          borderTop: '1px solid #EDE8DF',
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{ width: '4px', backgroundColor: '#C4724A', alignSelf: 'stretch', flexShrink: 0, marginTop: '0.25rem' }} />
          <h2
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              lineHeight: 1,
              color: '#2C2C2C',
              letterSpacing: '-0.02em',
            }}
          >
            Morning Bites
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            maxWidth: '900px',
          }}
        >
          {/* Avocado toast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
              <Image
                src="/images/avocadotoast.jpg"
                alt="Avocado toast on sourdough with feta and balsamic"
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <p
              style={{
                marginTop: '0.85rem',
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#2C2C2C',
                marginBottom: '0.25rem',
              }}
            >
              Avocado Toast
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter-var), sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: '#2C2C2C',
                opacity: 0.65,
              }}
            >
              Sourdough, smashed avo, feta, balsamic, seeds
            </p>
          </motion.div>

          {/* Bacon Egg Cheese */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
              <Image
                src="/images/burger.jpg"
                alt="Bacon, egg and cheese on brioche sesame bun with runny yolk"
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <p
              style={{
                marginTop: '0.85rem',
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#2C2C2C',
                marginBottom: '0.25rem',
              }}
            >
              Bacon, Egg &amp; Cheese
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter-var), sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: '#2C2C2C',
                opacity: 0.65,
              }}
            >
              Brioche sesame bun, runny yolk, house-made sauce
            </p>
          </motion.div>

          {/* House-Made Oats — text cell, same height as image cells */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                backgroundColor: '#EDE8DF',
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-syne-var), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                  color: '#2C2C2C',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                House-Made Oats
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter-var), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  color: '#2C2C2C',
                  opacity: 0.65,
                  lineHeight: 1.5,
                }}
              >
                Slow-cooked, seasonal fruit, honey
              </p>
            </div>
            {/* Spacer below cell matches text area below images */}
            <div style={{ marginTop: '0.85rem', visibility: 'hidden' }}>
              <p style={{ fontFamily: 'var(--font-syne-var)', fontWeight: 700, fontSize: '1rem' }}>—</p>
              <p style={{ fontFamily: 'var(--font-inter-var)', fontWeight: 300, fontSize: '0.85rem' }}>—</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── From the Bakery ── */}
      <section style={{ borderTop: '1px solid #EDE8DF' }}>
        {/* Full-width pain au chocolat — no overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            height: 'clamp(200px, 40vw, 480px)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/cafepainchocolat.jpg"
            alt="Viennoiserie board: almond croissant, pain au chocolat, brioche"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>

        {/* Section title */}
        <div
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem) 0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '4px', backgroundColor: '#C4724A', alignSelf: 'stretch', flexShrink: 0, marginTop: '0.25rem' }} />
            <h2
              style={{
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                lineHeight: 1,
                color: '#2C2C2C',
                letterSpacing: '-0.02em',
              }}
            >
              From the Bakery
            </h2>
          </div>
        </div>

        {/* Grid: cinnamon (sq) / instead (sq) / menu list */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            padding: '0 clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}
          >
            <Image
              src="/images/cinamon.jpg"
              alt="Three pistachio cinnamon rolls on a silver tray"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.4 }}
            style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}
          >
            <Image
              src="/images/instead.jpg"
              alt="Iced cruffin with citrus cream filling"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.4 }}
            style={{
              backgroundColor: '#EDE8DF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            <MenuList items={BAKERY} />
          </motion.div>
        </div>
      </section>

      {/* ── Light Lunch ── */}
      <section style={{ borderTop: '1px solid #EDE8DF' }}>
        {/* Full-width pizza — no overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            height: 'clamp(220px, 50vw, 560px)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/pizzacafe.jpg"
            alt="Herb focaccia and latte heart, natural light"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>

        {/* Section title + list on sage */}
        <div style={{ backgroundColor: '#A8B5A2' }}>
          <div
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
              maxWidth: '820px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '4px', backgroundColor: '#2C2C2C', alignSelf: 'stretch', flexShrink: 0, marginTop: '0.25rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-syne-var), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  lineHeight: 1,
                  color: '#2C2C2C',
                  letterSpacing: '-0.02em',
                }}
              >
                Light Lunch
              </h2>
            </div>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {LIGHT_LUNCH.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ padding: '1rem 0', borderBottom: '1px solid rgba(44,44,44,0.15)' }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-syne-var), sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#2C2C2C',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter-var), sans-serif',
                      fontWeight: 300,
                      fontSize: '0.875rem',
                      color: '#2C2C2C',
                      opacity: 0.75,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <p
        style={{
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem) 4rem',
          fontFamily: 'var(--font-inter-var), sans-serif',
          fontWeight: 300,
          fontSize: '0.78rem',
          color: '#2C2C2C',
          opacity: 0.45,
          letterSpacing: '0.04em',
        }}
      >
        Menu changes with the seasons — ask at the counter.
      </p>
    </main>
  )
}
