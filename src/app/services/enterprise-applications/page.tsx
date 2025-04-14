'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaCogs, FaChartLine, FaShieldAlt, FaUsers, FaRocket } from 'react-icons/fa';

const features = [
  {
    title: "Custom Enterprise Solutions",
    description: "Tailored applications designed for your business needs.",
    icon: <FaBuilding className="w-8 h-8" />
  },
  {
    title: "System Integration",
    description: "Seamless integration with existing enterprise systems.",
    icon: <FaCogs className="w-8 h-8" />
  },
  {
    title: "Business Intelligence",
    description: "Advanced analytics and reporting capabilities.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "Enterprise Security",
    description: "Robust security measures and compliance features.",
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "Team Collaboration",
    description: "Enhanced communication and workflow tools.",
    icon: <FaUsers className="w-8 h-8" />
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business.",
    icon: <FaRocket className="w-8 h-8" />
  }
];

export default function EnterpriseApplications() {
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
            Enterprise <span className="gradient-text">Applications</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Custom enterprise solutions powered by AI to transform your business
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
                At Synthotech.ai, we specialize in developing cutting-edge enterprise applications that leverage AI technology to drive business transformation. Our approach combines industry best practices with innovative solutions to deliver exceptional results.
              </p>
              <p className="text-gray-300 mb-4">
                We create scalable, secure, and intelligent applications that integrate seamlessly with your existing systems. Our solutions are designed to enhance productivity, streamline operations, and provide valuable insights through advanced analytics.
              </p>
              <p className="text-gray-300">
                Our comprehensive enterprise application services help organizations modernize their technology stack and maintain a competitive edge in today's digital landscape.
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
              Comprehensive enterprise application services powered by AI
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
                <h3 className="text-xl font-bold mb-4">1. Discovery</h3>
                <p className="text-gray-300">We analyze your business requirements and existing systems.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Design</h3>
                <p className="text-gray-300">We create a comprehensive solution architecture.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Development</h3>
                <p className="text-gray-300">We build robust applications with AI integration.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">4. Deployment</h3>
                <p className="text-gray-300">We ensure smooth implementation and ongoing support.</p>
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you modernize your enterprise applications with AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your Enterprise Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 