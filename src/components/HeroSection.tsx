// Hero Section Component

import { personalInfo } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 

  ChevronDown, 
  Mail, 
  Phone,
  Database,
  MapPin, 
  Github, 
  Linkedin,
  Zap,
  Cloud,
  Code,
  Send, 
} from 'lucide-react';

export const HeroSection = () => {
  return (

<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-0">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-pink-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full blur-xl md:blur-2xl animate-ping"></div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 md:left-20 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full animate-bounce"></div>
    <div className="absolute top-40 right-10 md:right-20 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
    <div className="absolute bottom-40 left-20 md:left-40 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-700"></div>
    <div className="absolute bottom-20 right-20 md:right-40 w-4 h-4 md:w-5 md:h-5 bg-cyan-500 rounded-full animate-bounce delay-1000"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-10">
      
      {/* Profile Section - Shows first on mobile (order-1) */}
      <motion.div
        className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          {/* Main Profile Circle - Optimized for mobile */}
          <motion.div
            className="w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Outer animated rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-3 sm:inset-4 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full animate-pulse delay-500 opacity-30"></div>
            <div className="absolute inset-6 sm:inset-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-1000 opacity-25"></div>
            
            {/* Main profile container */}
            <div className="absolute inset-8 sm:inset-10 md:inset-12 lg:inset-12 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center relative">
                {/* Profile Image Placeholder - You can replace this with actual image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AK
                  </span>
                </div>
                
                {/* Alternative: Uncomment to use actual image */}
                {/*
                <img 
                  src="/profile-photo.jpg" 
                  alt="Ajay Kumar" 
                  className="w-full h-full object-cover rounded-full"
                />
                */}
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Icons Around Profile - Mobile optimized */}
          <motion.div
            className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2 xs:-bottom-3 xs:-left-3 sm:-bottom-4 sm:-left-4 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Zap size={12} className="xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-3 xs:-right-4 sm:-right-6 md:-right-8 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Database size={10} className="xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </motion.div>

          <motion.div
            className="absolute top-1/4 -left-3 xs:-left-4 sm:-left-6 md:-left-8 w-6 h-6 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <Cloud size={8} className="xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
          </motion.div>

          {/* Achievement Badges - Mobile optimized */}
          <motion.div
            className="absolute -top-4 xs:-top-5 sm:-top-6 md:-top-8 lg:-top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs xs:text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Available for work</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 xs:-bottom-5 sm:-bottom-6 md:-bottom-8 lg:-bottom-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <span className="text-xs xs:text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">5+ Years Experience</span>
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Information Section - Shows second on mobile (order-2) */}
      <motion.div
        className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="space-y-4 lg:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-800 block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
                {personalInfo.name}
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700 font-medium">
              {personalInfo.title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-sm xs:text-sm sm:text-base">
              {personalInfo.summary}
            </p>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="space-y-3 lg:space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-2 xs:gap-3 text-gray-600 justify-center lg:justify-start">
            <MapPin size={16} className="xs:w-5 xs:h-5 text-blue-500 flex-shrink-0" />
            <span className="truncate text-xs xs:text-sm sm:text-base">{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2 xs:gap-3 text-gray-600 justify-center lg:justify-start">
            <Mail size={16} className="xs:w-5 xs:h-5 text-purple-500 flex-shrink-0" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors truncate text-xs xs:text-sm sm:text-base">
              {personalInfo.email}
            </a>
          </div>
                {/* <div className="flex items-center gap-2 xs:gap-3 text-gray-600 justify-center lg:justify-start">
            <Phone size={16} className="xs:w-5 xs:h-5 text-green-500 flex-shrink-0" />
            <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 transition-colors text-xs xs:text-sm sm:text-base">
              {personalInfo.phone}
            </a>
          </div> */}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-3 xs:gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.a
            href={`https://linkedin.com/${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 xs:p-2.5 sm:p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl flex items-center justify-center"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" />
          </motion.a>
          <motion.a
            href={`https://github.com/${personalInfo.github}`}
             target="_blank"
            className="p-2 xs:p-2.5 sm:p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl flex items-center justify-center"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub profile"
          >
            <Github size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-800" />
          </motion.a>
        </motion.div>

   
       {/* Action Buttons */}
<motion.div
  className="flex flex-row gap-2 xs:gap-3 sm:gap-4 mt-6 justify-center lg:justify-start"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.6 }}
>
  <motion.a
    href="#contact"
    className="px-3 py-2 xs:px-4 xs:py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-1 xs:gap-2 flex-1 sm:flex-none"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Send size={12} className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
    <span className="text-xs xs:text-sm sm:text-base">Get In Touch</span>
  </motion.a>
  <motion.a
    href="#about"
    className="px-3 py-2 xs:px-4 xs:py-2.5 sm:px-6 sm:py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 text-center flex items-center justify-center gap-1 xs:gap-2 flex-1 sm:flex-none"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <ChevronDown size={12} className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
    <span className="text-xs xs:text-sm sm:text-base">Learn More</span>
  </motion.a>
</motion.div>
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    className="absolute bottom-6 xs:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <ChevronDown size={24} className="xs:w-8 xs:h-8 text-blue-600" />
  </motion.div>
</section>
  );
};