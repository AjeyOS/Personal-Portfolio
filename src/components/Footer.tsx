 
// src/components/Navbar.tsx
'use client'

import { personalInfo } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Heart
} from 'lucide-react';

// Footer Component
export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{personalInfo.name}</h3>
                <p className="text-blue-100 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-blue-100">
              <span>Made with</span>
              <motion.span
                className="text-pink-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>using Next.js & TypeScript</span>
            </div>
            
            <div className="flex gap-3">
              <motion.a
                href={`https://linkedin.com/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>
              <motion.a
                href={`https://github.com/${personalInfo.github}`}
                 target="_blank"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} className="text-white" />
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <motion.a
          href="#"
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
        >
          <ChevronDown size={24} className="transform rotate-180" />
        </motion.a>
      </div>
    </footer>
  );
};