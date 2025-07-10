import { experiences } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 

  MapPin, 
  Calendar,
} from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in building scalable applications and leading development teams
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 hidden md:block"></div>
              
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block shadow-lg"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              ></motion.div>

              <div className="md:ml-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-gray-800">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar size={16} className="text-blue-500" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} className="text-purple-500" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  {exp.description.map((desc, descIndex) => (
                    <motion.div
                      key={descIndex}
                      className="flex items-start gap-3 mb-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: descIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};