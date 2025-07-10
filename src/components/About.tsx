// About Section Component
import { achievements } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 
  Send,
  FileText,

} from 'lucide-react';

export const AboutSection = () => {
  return (
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">My Journey</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over 5 years of experience in frontend development, I've had the privilege of working with 
                  leading companies like Coforge, Smart Energy Water, and Chetu Inc. My expertise spans across 
                  modern web technologies, from React.js and Angular to TypeScript and cloud platforms.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I specialize in building scalable web applications, implementing real-time features, and creating 
                  intuitive user experiences. My passion lies in transforming complex business requirements into 
                  elegant technical solutions that drive results.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <FileText size={20} />
                    <span className="font-medium">Resume</span>
                  </div>
                  <div className="relative group">
                    <motion.button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={16} className="inline mr-2" />
                      Request Resume
                    </motion.button>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                      Contact me to receive my detailed resume
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${achievement.color} text-white p-3 rounded-xl mb-3 flex justify-center w-fit mx-auto`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

