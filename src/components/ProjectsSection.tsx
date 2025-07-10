import { projects } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight,
  Star,
} from 'lucide-react';


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some of the projects I've worked on that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                </div>
                <motion.div
                  className="text-blue-500 cursor-pointer ml-4"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 mb-4 flex items-center gap-2">
                  <Star size={18} />
                  Key Highlights:
                </h4>
                <div className="space-y-3">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlightIndex}
                      className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-100"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: highlightIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
