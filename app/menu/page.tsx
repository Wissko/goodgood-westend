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

const MORNING_BITES: MenuItem[] = [
  { name: 'Avocado Toast', desc: 'Sourdough, smashed avo, feta, balsamic, seeds' },
  { name: 'Bacon, Egg & Cheese', desc: 'Brioche sesame bun, runny yolk, house-made sauce' },
  { name: 'House-Made Oats', desc: 'Slow-cooked, seasonal fruit, honey' },
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

function SectionTitle({ children, color = '#2C2C2C' }: { children: React.ReactNode; color?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        fontFamily: 'var(--font-syne-var), sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
        lineHeight: 1,
        color,
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
      }}
    >
      {children}
    </motion.h2>
  )
}

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: '1rem 0', borderBottom: '1px solid #EDE8DF' }}
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
      {/* ── Page header ── */}
      <div
        style={{
          padding:
            'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '3rem' }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-syne-var), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              lineHeight: 0.92,
              color: '#2C2C2C',
              letterSpacing: '-0.02em',
            }}
          >
            The
            <br />
            Menu
          </h1>
          <p
            style={{
              marginTop: '1.25rem',
              fontFamily: 'var(--font-inter-var), sans-serif',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: '#C4724A',
              letterSpacing: '0.05em',
            }}
          >
            Tim Adams specialty coffee · house-made food · deli counter
          </p>
        </motion.div>
      </div>

      {/* ── Coffee ── */}
      <section
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop: '1px solid #EDE8DF',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '2.5rem 5rem',
            maxWidth: '1100px',
          }}
        >
          <div>
            <SectionTitle color="#C4724A">Coffee</SectionTitle>
            <MenuList items={COFFEE} />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}
          >
            <Image
              src="/images/croissantcafe.jpg"
              alt="Butter croissant paired with a latte swan art"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Morning Bites ── */}
      <section
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop: '1px solid #EDE8DF',
        }}
      >
        <SectionTitle>Morning Bites</SectionTitle>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            marginTop: '1.5rem',
          }}
        >
          {/* Avocado toast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
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
                marginTop: '0.75rem',
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#2C2C2C',
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

          {/* Burger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
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
                marginTop: '0.75rem',
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#2C2C2C',
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

          {/* Oats — text only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              backgroundColor: '#EDE8DF',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-syne-var), sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#2C2C2C',
                marginBottom: '0.4rem',
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
              }}
            >
              Slow-cooked, seasonal fruit, honey
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── From the Bakery ── */}
      <section
        style={{
          borderTop: '1px solid #EDE8DF',
          padding: 'clamp(2rem, 4vw, 3.5rem) 0',
        }}
      >
        <div style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
          <SectionTitle>From the Bakery</SectionTitle>
        </div>

        {/* Full-width board photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', height: 'clamp(240px, 40vw, 480px)', overflow: 'hidden' }}
        >
          <Image
            src="/images/cafepainchocolat.jpg"
            alt="Viennoiserie board: almond croissant, pain au chocolat, brioche"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>

        {/* Grid: cinnamon + cruffin + list */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '1.5rem clamp(1.5rem, 5vw, 4rem) 0',
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
            transition={{ delay: 0.1, duration: 0.4 }}
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

          <div
            style={{
              backgroundColor: '#EDE8DF',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <MenuList items={BAKERY} />
          </div>
        </div>
      </section>

      {/* ── Light Lunch ── */}
      <section
        style={{
          borderTop: '1px solid #EDE8DF',
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <SectionTitle>Light Lunch</SectionTitle>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '2.5rem 5rem',
            maxWidth: '1100px',
            marginTop: '1.5rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}
          >
            <Image
              src="/images/pizzacafe.jpg"
              alt="Herb focaccia and latte heart, natural light"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>

          <div>
            <MenuList items={LIGHT_LUNCH} />
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
