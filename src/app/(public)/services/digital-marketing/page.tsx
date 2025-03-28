'use client';

import { motion } from 'framer-motion';
import { FaHashtag, FaChartLine, FaSearch, FaEnvelope, FaUsers, FaRocket } from 'react-icons/fa';

const features = [
  {
    title: "AI-Powered Content Creation",
    description: "Generate engaging content using advanced AI algorithms and natural language processing.",
    icon: <FaHashtag className="w-8 h-8" />
  },
  {
    title: "Social Media Management",
    description: "Automated social media campaigns with AI-driven content optimization.",
    icon: <FaUsers className="w-8 h-8" />
  },
  {
    title: "Email Marketing Automation",
    description: "Smart email campaigns with personalized content and automated workflows.",
    icon: <FaEnvelope className="w-8 h-8" />
  },
  {
    title: "SEO & SEM Optimization",
    description: "Data-driven search engine optimization and marketing strategies.",
    icon: <FaSearch className="w-8 h-8" />
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics with AI-powered insights and recommendations.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "Performance Marketing",
    description: "Results-driven campaigns with continuous optimization and scaling.",
    icon: <FaRocket className="w-8 h-8" />
  }
];

const technologies = [
  {
    name: "AI Content Generation",
    description: "Advanced content creation tools"
  },
  {
    name: "Social Media Analytics",
    description: "Comprehensive social media insights"
  },
  {
    name: "Email Marketing Platforms",
    description: "Automated email campaign tools"
  },
  {
    name: "SEO Tools",
    description: "Search engine optimization software"
  }
];

export default function DigitalMarketing() {
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
            Digital <span className="gradient-text">Marketing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Data-driven digital marketing solutions powered by AI to grow your business
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
                At Synthotech.ai, we combine cutting-edge AI technology with proven marketing strategies to deliver exceptional results. Our data-driven approach ensures that every marketing decision is backed by insights and analytics.
              </p>
              <p className="text-gray-300 mb-4">
                We leverage advanced AI algorithms to optimize content creation, automate campaigns, and provide real-time performance monitoring. This allows us to continuously improve and scale your marketing efforts effectively.
              </p>
              <p className="text-gray-300">
                Our comprehensive digital marketing solutions are designed to help businesses of all sizes achieve their growth objectives through intelligent, targeted, and measurable marketing strategies.
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
              Comprehensive digital marketing services powered by AI
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
                <h3 className="text-xl font-bold mb-4">1. Analysis</h3>
                <p className="text-gray-300">We analyze your current marketing strategy and identify opportunities for improvement.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Strategy</h3>
                <p className="text-gray-300">We develop a comprehensive digital marketing strategy tailored to your goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Implementation</h3>
                <p className="text-gray-300">We execute your marketing strategy with AI-powered tools and automation.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">4. Optimization</h3>
                <p className="text-gray-300">We continuously optimize your campaigns based on data and performance metrics.</p>
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
              Ready to Transform Your Digital Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your marketing goals with AI-powered solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your Marketing Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 