"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: <Layout size={24} />, tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", icon: <Database size={24} />, tags: ["Node.js", "Java", "Python", "Express", "Prisma"] },
    { name: "Databases", icon: <Terminal size={24} />, tags: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Développeur Full Stack passionné, je me spécialise dans la création d&apos;applications web robustes et scalables.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Mon expertise couvre l&apos;ensemble de la stack technique, de la conception d&apos;interfaces utilisateur intuitives au développement d&apos;architectures backend performantes.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-2xl text-blue-600">3+</h4>
                <p className="text-gray-500">Années d&apos;Expérience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
