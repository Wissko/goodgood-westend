'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Wire up to your preferred form handler (Formspree, Resend, etc.)
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 0',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #2C2C2C',
    fontFamily: 'var(--font-inter-var), sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    color: '#2C2C2C',
    outline: 'none',
    appearance: 'none',
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── grainecafe.jpg texture background ── */}
      <div
        aria-hidden
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <Image
          src="/images/grainecafe.jpg"
          alt=""
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.09 }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding:
            'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)',
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
            marginBottom: '4rem',
          }}
        >
          Say
          <br />
          Hi.
        </motion.h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '3rem 6rem',
            maxWidth: '900px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            {sent ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontFamily: 'var(--font-syne-var), sans-serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#C4724A',
                }}
              >
                Got it — thanks!
              </motion.p>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-syne-var), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.58rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#A8B5A2',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-syne-var), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.58rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#A8B5A2',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-syne-var), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.58rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#A8B5A2',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.65 }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    style={{
                      padding: '0.85rem 2.25rem',
                      backgroundColor: '#2C2C2C',
                      color: '#EDE8DF',
                      fontFamily: 'var(--font-syne-var), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.62rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor =
                        '#C4724A'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor =
                        '#2C2C2C'
                    }}
                  >
                    Send it
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-syne-var), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.58rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#A8B5A2',
                    marginBottom: '0.5rem',
                  }}
                >
                  Instagram
                </p>
                <a
                  href="https://instagram.com/goodgoodwestend"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-syne-var), sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#C4724A',
                  }}
                >
                  @goodgoodwestend
                </a>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-syne-var), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.58rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#A8B5A2',
                    marginBottom: '0.5rem',
                  }}
                >
                  Phone
                </p>
                <a
                  href="tel:+61466629352"
                  style={{
                    fontFamily: 'var(--font-inter-var), sans-serif',
                    fontWeight: 300,
                    fontSize: '1rem',
                    color: '#2C2C2C',
                  }}
                >
                  +61 466 629 352
                </a>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-syne-var), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.58rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#A8B5A2',
                    marginBottom: '0.5rem',
                  }}
                >
                  Come in
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter-var), sans-serif',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: '#2C2C2C',
                    lineHeight: 1.65,
                  }}
                >
                  2/24 Beesley St
                  <br />
                  West End, Brisbane
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
