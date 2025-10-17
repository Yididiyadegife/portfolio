'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'

const skillsData = [
  { name: 'PHP', level: 95 },
  { name: 'JS', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Next/node.js', level: 75 },
  { name: 'MySQL', level: 88 },
]

export default function AboutSection() {
  const [animatedData, setAnimatedData] = useState(
    skillsData.map((skill) => ({ ...skill, level: 0 }))
  )

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight - 150) {
          setAnimatedData(skillsData)
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-start">
     
        <div className="w-full order-1 md:order-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
             Hello! I’m Yididiya, a passionate Full Stack Web Developer from Ethiopia. 
             I enjoy creating websites that are fast, clean, and easy to use.
             I’m always learning and exploring new tools to improve my skills.
            </p>
          </motion.div>
        
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-56"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">My Skills</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={animatedData}
                layout="horizontal" 
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <XAxis
                  dataKey="name"
                  type="category"
                tick={{ fill: "#899190ec" }} 
/>
                <XAxis dataKey="name" type="category" />
                <YAxis type="number" domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="level" fill="#06b6d4" radius={[8, 8, 8, 8]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start order-2 md:order-2 pt-8 md:pl-8"
        >
          <div className="w-[400px] h-[400px] rounded-full shadow-xl overflow-hidden mb-4">
            <Image
              src="/images/profile.jpg"
              alt="Yididiya Degife"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="mt-2 px-6 py-2"
              style={{
                backgroundColor: '#06b6d4',
                color: '#fff',
                borderRadius: '9999px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'background 0.2s',
                display: 'inline-block',
                textAlign: 'center',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0891b2')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#06b6d4')}
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}