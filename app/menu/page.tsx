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
  { name: 'Focaccia', desc: 'Herbs, olive oil, seasonal toppings' },
  { name: 'Deli Sandwich', desc: "House-sliced meats & cheeses — today's build at the counter" },
  { name: 'Daily Salad', desc: 'Fresh, seasonal, changes every morning' },
  { name: 'Lasagne Maison', desc: 'Made in-house, served warm' },
]

function SectionTitle({ children, color = '#2C2C2C' }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '2rem' }}>
      <div style={{ width: '4px', backgroundColor: '#F0A830', alignSelf: 'stretch', flexShrink: 0, marginTop: '0.2rem' }} />
      <h2 style={{
        fontFamily: 'var(--font-heading), sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
        lineHeight: 1,
        color,
        letterSpacing: '-0.02em',
      }}>
        {children}
      </h2>
    </div>
  )
}

function MenuList({ items, borderColor = '#EDE8DF' }: { items: MenuItem[]; borderColor?: string }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: '0.9rem 0', borderBottom: `1px solid ${borderColor}` }}
        >
          <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.95rem', color: '#2C2C2C', marginBottom: '0.2rem' }}>
            {item.name}
          </p>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.85rem', color: '#2C2C2C', opacity: 0.65 }}>
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
      {/* Responsive styles */}
      <style>{`
        .menu-coffee-grid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid #EDE8DF;
        }
        .menu-coffee-photo {
          position: relative;
          height: clamp(240px, 55vw, 480px);
          overflow: hidden;
          order: -1;
        }
        .menu-bites-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 900px;
        }
        .menu-bakery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          padding: 0 clamp(1.25rem, 5vw, 4rem) clamp(2rem, 4vw, 3.5rem);
        }
        .menu-bakery-list {
          grid-column: 1 / -1;
        }
        @media (min-width: 640px) {
          .menu-coffee-grid {
            grid-template-columns: 40% 60%;
          }
          .menu-coffee-photo {
            height: 500px;
            order: 0;
          }
          .menu-bites-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .menu-bakery-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1.5rem;
          }
          .menu-bakery-list {
            grid-column: auto;
          }
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ backgroundColor: '#F7F4EF', padding: 'clamp(5.5rem, 10vw, 8rem) clamp(1.25rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}
        >
          <div aria-hidden="true" style={{ width: '4px', backgroundColor: '#F0A830', alignSelf: 'stretch', flexShrink: 0, marginTop: '0.3rem' }} />
          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(4rem, 16vw, 13rem)',
              lineHeight: 0.82,
              color: '#2C2C2C',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
            }}>
              The<br />Menu
            </h1>
            <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.85rem', color: '#F0A830', letterSpacing: '0.04em' }}>
              Tim Adams specialty coffee · house-made food · deli counter
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Coffee ── */}
      <section className="menu-coffee-grid">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 4vw, 3rem)' }}
        >
          <SectionTitle color="#F0A830">Coffee</SectionTitle>
          <MenuList items={COFFEE} />
        </motion.div>
        <motion.div
          className="menu-coffee-photo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/images/croissantcafe.jpg" alt="Croissant and latte" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </motion.div>
      </section>

      {/* ── Morning Bites ── */}
      <section style={{ borderTop: '1px solid #EDE8DF', padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem)' }}>
        <SectionTitle>Morning Bites</SectionTitle>
        <div className="menu-bites-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
              <Image src="/images/avocadotoast.jpg" alt="Avocado toast" fill unoptimized style={{ objectFit: 'cover' }} />
            </div>
            <p style={{ marginTop: '0.75rem', fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.95rem', color: '#2C2C2C', marginBottom: '0.2rem' }}>Avocado Toast</p>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#2C2C2C', opacity: 0.65 }}>Sourdough, smashed avo, feta, balsamic, seeds</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.4 }}>
            <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
              <Image src="/images/burger.jpg" alt="Bacon egg cheese" fill unoptimized style={{ objectFit: 'cover' }} />
            </div>
            <p style={{ marginTop: '0.75rem', fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.95rem', color: '#2C2C2C', marginBottom: '0.2rem' }}>Bacon, Egg &amp; Cheese</p>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#2C2C2C', opacity: 0.65 }}>Brioche sesame bun, runny yolk, house-made sauce</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14, duration: 0.4 }}>
            <div style={{ aspectRatio: '1', backgroundColor: '#EDE8DF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: 'clamp(0.95rem, 2.5vw, 1.3rem)', color: '#2C2C2C', marginBottom: '0.5rem', lineHeight: 1.2 }}>House-Made Oats</p>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#2C2C2C', opacity: 0.65 }}>Slow-cooked, seasonal fruit, honey</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── From the Bakery ── */}
      <section style={{ borderTop: '1px solid #EDE8DF' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ position: 'relative', height: 'clamp(180px, 40vw, 480px)', overflow: 'hidden' }}>
          <Image src="/images/cafepainchocolat.jpg" alt="Viennoiserie board" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </motion.div>

        <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem) 0' }}>
          <SectionTitle>From the Bakery</SectionTitle>
        </div>

        <div className="menu-bakery-grid">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
            <Image src="/images/cinamon.jpg" alt="Cinnamon rolls" fill unoptimized style={{ objectFit: 'cover' }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.4 }}
            style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
            <Image src="/images/instead.jpg" alt="Cruffin" fill unoptimized style={{ objectFit: 'cover' }} />
          </motion.div>

          <motion.div className="menu-bakery-list" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14, duration: 0.4 }}
            style={{ backgroundColor: '#EDE8DF', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <MenuList items={BAKERY} />
          </motion.div>
        </div>
      </section>

      {/* ── Light Lunch ── */}
      <section style={{ borderTop: '1px solid #EDE8DF' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ position: 'relative', height: 'clamp(200px, 50vw, 560px)', overflow: 'hidden' }}>
          <Image src="/images/pizzacafe.jpg" alt="Focaccia and latte" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </motion.div>

        <div style={{ backgroundColor: '#A8B5A2' }}>
          <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 4rem)', maxWidth: '820px' }}>
            <SectionTitle color="#2C2C2C">Light Lunch</SectionTitle>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {LIGHT_LUNCH.map((item, i) => (
                <motion.li key={item.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ padding: '0.9rem 0', borderBottom: '1px solid rgba(44,44,44,0.15)' }}>
                  <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 900, fontSize: '0.95rem', color: '#2C2C2C', marginBottom: '0.2rem' }}>{item.name}</p>
                  <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.85rem', color: '#2C2C2C', opacity: 0.75 }}>{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <p style={{ padding: '1.5rem clamp(1.25rem, 5vw, 4rem) 4rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.75rem', color: '#2C2C2C', opacity: 0.4, letterSpacing: '0.04em' }}>
        Menu changes with the seasons — ask at the counter.
      </p>
    </main>
  )
}
