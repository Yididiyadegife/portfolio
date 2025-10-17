'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// ✅ Define a type for better clarity (optional but clean)
interface Project {
  title: string
  desc: string
  tech: string[]
  demo: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Online Learning System',
    desc: 'A full-stack learning platform for students, teachers, and administrators, built with PHP, MySQL, and modern frontend tools.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    demo: 'http://localhost/online-learning-system/',
    github: 'https://github.com/yourusername/online-learning-system',
  },
  {
    title: 'Personal Portfolio',
    desc: 'A modern and responsive portfolio website created with Next.js, TypeScript, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    demo: '#',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Chat Application',
    desc: 'A real-time chat app using Firebase for instant messaging and Framer Motion for smooth animations.',
    tech: ['React', 'Firebase', 'Framer Motion'],
    demo: '#',
    github: 'https://github.com/yourusername/chat-app',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col justify-between transition-transform"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500 text-white px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Live Demo`}
                  className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 text-sm font-medium transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub Repository`}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
