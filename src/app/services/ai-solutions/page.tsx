'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaRocket, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const features = [
  {
    title: "AI Strategy",
    description: "Custom AI solutions designed for your business needs.",
    icon: <FaRobot className="w-8 h-8" />
  },
  {
    title: "Machine Learning",
    description: "Advanced ML models for predictive analytics and automation.",
    icon: <FaBrain className="w-8 h-8" />
  },
  {
    title: "AI Integration",
    description: "Seamless integration of AI into existing systems.",
    icon: <FaRocket className="w-8 h-8" />
  },
  {
    title: "AI Security",
    description: "Robust security measures for AI systems and data.",
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "AI Analytics",
    description: "Real-time monitoring and optimization of AI models.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "AI Training",
    description: "Expert guidance and support for AI implementation.",
    icon: <FaUsers className="w-8 h-8" />
  }
];

const technologies = [
  {
    name: "TensorFlow",
    description: "Open-source machine learning framework"
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for research and production"
  },
  {
    name: "OpenAI GPT",
    description: "Advanced language models for text processing"
  },
  {
    name: "Computer Vision",
    description: "Image and video analysis solutions"
  }
];

export default function AISolutions() {
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
            AI <span className="gradient-text">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Cutting-edge AI solutions to transform your business
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
                At Synthotech.ai, we create cutting-edge AI solutions that combine innovative technology with powerful machine learning capabilities. Our approach focuses on delivering exceptional results while leveraging the latest AI advancements.
              </p>
              <p className="text-gray-300 mb-4">
                We develop custom AI solutions that are optimized for performance, security, and scalability. Our expertise in machine learning and deep learning enables us to create intelligent systems that drive business growth.
              </p>
              <p className="text-gray-300">
                Our comprehensive AI services help businesses harness the power of artificial intelligence to gain a competitive edge in today's digital landscape.
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
              Comprehensive AI services powered by cutting-edge technology
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
                <p className="text-gray-300">We define AI requirements and design architecture.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Design</h3>
                <p className="text-gray-300">We create AI models and system architecture.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Development</h3>
                <p className="text-gray-300">We build and train AI systems.</p>
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
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage AI to drive your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your AI Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 