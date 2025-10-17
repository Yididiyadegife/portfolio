'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
} from 'react-icons/fa'

export default function ContactSection() {
  const [status, setStatus] = useState<{ message: string; color: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ message: 'Sending...', color: 'text-blue-500' })

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        }
      )

      if (response.ok) {
        setStatus({ message: '✅ Message sent successfully!', color: 'text-green-500' })
        form.reset()
      } else {
        setStatus({
          message: '❌ Something went wrong. Please try again.',
          color: 'text-red-500',
        })
      }
    } catch {
      setStatus({
        message: '⚠️ Network error. Please check your connection.',
        color: 'text-orange-500',
      })
    }
  }

  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-900/40 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Contact Me
          </h2>
          <p className="text-center text-muted dark:text-slate-300 mb-6">
            Want to work together or have a question? Send me a message or reach out on social media.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mb-8 text-slate-700 dark:text-slate-300">
            <a
              href="https://github.com/yididiyadegife"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yididiyadegife"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/yididiyadegife"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/yididiya_degife"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/yididiyayd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaTelegramPlane className="w-6 h-6" />
            </a>
            <a
              href="https://discord.com/yididiyaa"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-6 grid gap-3 md:grid-cols-2">
            <input
              name="name"
              placeholder="Your name"
              required
              className="p-3 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="p-3 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="p-3 rounded md:col-span-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              className="md:col-span-2 px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Status message */}
          {status && (
            <p className={`mt-4 text-center font-medium ${status.color}`}>
              {status.message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
