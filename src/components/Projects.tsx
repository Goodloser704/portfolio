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
      github: "#",
      demo: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Tableau de bord analytique avec graphiques en temps réel et authentification.",
      image: "/next.svg", // Placeholder
      tags: ["React", "Recharts", "Firebase", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager",
      description: "Application de gestion de tâches collaborative avec mises à jour en direct.",
      image: "/next.svg", // Placeholder
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
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
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-500 opacity-20"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <Code size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Démo
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
