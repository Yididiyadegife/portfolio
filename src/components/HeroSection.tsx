'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
} from 'react-icons/fa'

export default function HeroSection() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section id="home" className="pt-28">
      <div className="section-inner text-center">
        {/* Main Heading and Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-accent">Yididiya Degife</span>
          </h1>

          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            A Full Stack Web Developer who loves turning ideas into interactive web experiences.
          </p>

          {/* ✅ Social Media Icons */}
          <motion.div
            className="mt-8 flex justify-center items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="https://github.com/yididiyadegife"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 hover:text-accent transition-transform transform hover:scale-110" />
            </a>

            <a
              href="https://linkedin.com/in/yididiyadegife"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 hover:text-accent transition-transform transform hover:scale-110" />
            </a>

            <a
              href="https://instagram.com/yididiyadegife"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 hover:text-accent transition-transform transform hover:scale-110" />
            </a>

            <a
              href="https://x.com/Yididiya_Degife"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 hover:text-accent transition-transform transform hover:scale-110" />
            </a>

            <a
              href="https://t.me/yididiyayd"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="w-6 h-6 hover:text-accent transition-transform transform hover:scale-110" />
            </a>

            <a
              href="https://discord.com/yididiyaa"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="hover:text-accent transition"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
          </motion.div>

          {/* ✅ Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-lg border border-accent font-medium hover:scale-105 transform transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
