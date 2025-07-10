"use client";
import { personalInfo } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
} from 'lucide-react';

// Contact Section Component
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-white bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                        {personalInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* <motion.div
                    className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-white bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Phone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </motion.div> */}

                      <motion.div
                    className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-white bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">LinkedIn</p>
                      <a href={`https://linkedin.com/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                        {personalInfo.linkedin}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-white bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Location</p>
                      <p className="text-gray-800 font-medium">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-500 resize-none"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} className="inline mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
