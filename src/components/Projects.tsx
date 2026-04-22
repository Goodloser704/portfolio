"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description: "Une plateforme complète avec panier, paiement Stripe et gestion de stock.",
      image: "/next.svg", // Placeholder
      tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      title: "SaaS Dashboard",
      description: "Tableau de bord analytique avec graphiques en temps réel et authentification.",
      image: "/next.svg", // Placeholder
      tags: ["React", "Recharts", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      title: "Task Manager",
      description: "Application de gestion de tâches collaborative avec mises à jour en direct.",
      image: "/next.svg", // Placeholder
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    <Code size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-bold"
                  >
                    Demo
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
