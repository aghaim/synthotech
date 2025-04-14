'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaCode, FaRocket, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const features = [
  {
    title: "Custom Website Development",
    description: "Tailored websites designed for your unique business needs.",
    icon: <FaGlobe className="w-8 h-8" />
  },
  {
    title: "Modern Technologies",
    description: "Latest web technologies and frameworks for optimal performance.",
    icon: <FaCode className="w-8 h-8" />
  },
  {
    title: "AI Integration",
    description: "Smart features and personalized experiences powered by AI.",
    icon: <FaRocket className="w-8 h-8" />
  },
  {
    title: "Web Security",
    description: "Robust security measures and data protection.",
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "Analytics & SEO",
    description: "Advanced analytics and search engine optimization.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "User Experience",
    description: "Intuitive interfaces and seamless interactions.",
    icon: <FaUsers className="w-8 h-8" />
  }
];

export default function WebsiteDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-gray text-4xl md:text-5xl font-bold mb-6"
          >
            Website <span className="gradient-text">Development</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Modern websites powered by AI to showcase your business
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect p-8 sm:p-12 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Approach</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                At Synthotech.ai, we create modern, responsive websites that combine stunning design with powerful AI capabilities. Our approach focuses on delivering exceptional user experiences while leveraging the latest web technologies.
              </p>
              <p className="text-gray-300 mb-4">
                We develop custom websites that are optimized for performance, security, and search engines. Our AI integration enables smart features and personalized experiences that engage your visitors.
              </p>
              <p className="text-gray-300">
                Our comprehensive website development services help businesses create compelling online presences that drive engagement and conversions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive website development services powered by AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl text-center"
              >
                <div className="text-4xl mb-4 text-blue-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect p-8 sm:p-12 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">1. Planning</h3>
                <p className="text-gray-300">We define website requirements and design architecture.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Design</h3>
                <p className="text-gray-300">We create modern UI/UX designs and prototypes.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Development</h3>
                <p className="text-gray-300">We build responsive websites with AI integration.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">4. Launch</h3>
                <p className="text-gray-300">We ensure smooth deployment and ongoing support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect p-8 sm:p-12 rounded-xl text-center"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you create an engaging website with AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your Website Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 