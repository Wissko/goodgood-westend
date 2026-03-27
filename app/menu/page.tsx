'use client'

import { motion } from 'framer-motion'

type MenuItem = { name: string; desc: string }

const COFFEE: MenuItem[] = [
  { name: 'Espresso', desc: 'Tim Adams specialty — bright, balanced, clean' },
  { name: 'Batch Filter', desc: 'Single origin, rotating — ask your barista' },
  { name: 'Cappuccino', desc: 'Proper milk texture, no frills' },
  { name: 'Flat White', desc: 'The classic, done right' },
  { name: 'Cold Brew', desc: 'House-made, slow-steeped, smooth' },
  { name: 'Matcha Latte', desc: 'Ceremonial grade, oat or whole' },
]

const FOOD: MenuItem[] = [
  { name: 'Avocado Toast', desc: 'House bread, smashed avo, chilli oil, seeds' },
  { name: 'House-Made Oats', desc: 'Slow-cooked, seasonal fruit, honey' },
  { name: 'Deli Sandwich', desc: "House-sliced meats & cheeses — today's build at the counter" },
  { name: 'Daily Salad', desc: 'Fresh, seasonal, changes every morning' },
  { name: 'House Lasagne', desc: 'Made in-house, served warm' },
]

function Section({ title, items, terra }: { title: string; items: MenuItem[]; terra?: boolean }) {
  return (
    <section style={{ marginBottom: '4rem' }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-syne-var), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
          lineHeight: 1,
          color: terra ? '#C4724A' : '#2C2C2C',
          marginBottom: '2rem',
        }}
      >
        {title}
      </motion.h2>
      <ul style={{ listStyle: 'none' }}>
        {items.map((item, i) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: '1.2rem 0',
              borderBottom: '1px solid #EDE8DF',
            }}
          >
            <p style={{ fontFamily: 'var(--font-syne-var), sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#2C2C2C', marginBottom: '0.2rem' }}>
              {item.name}
            </p>
            <p style={{ fontFamily: 'var(--font-inter-var), sans-serif', fontWeight: 300, fontSize: '0.875rem', color: '#2C2C2C', opacity: 0.65 }}>
              {item.desc}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default function MenuPage() {
  return (
    <main style={{ minHeight: '100vh', padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)' }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '4rem' }}
      >
        <h1 style={{ fontFamily: 'var(--font-syne-var), sans-serif', fontWeight: 800, fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.92, color: '#2C2C2C', letterSpacing: '-0.02em' }}>
          The<br />Menu
        </h1>
        <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-inter-var), sans-serif', fontWeight: 300, fontSize: '0.9rem', color: '#C4724A', letterSpacing: '0.05em' }}>
          Tim Adams specialty coffee · house-made food · deli counter
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '0 5rem', maxWidth: '1100px' }}>
        <Section title="Coffee" items={COFFEE} />
        <Section title="Food" items={FOOD} terra />
      </div>

      <p style={{ marginTop: '1rem', fontFamily: 'var(--font-inter-var), sans-serif', fontWeight: 300, fontSize: '0.78rem', color: '#2C2C2C', opacity: 0.45, letterSpacing: '0.04em' }}>
        Menu changes with the seasons — ask at the counter.
      </p>
    </main>
  )
}
