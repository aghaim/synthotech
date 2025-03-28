'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaSearch, FaCogs, FaRocket, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: "AI-Driven Market Analysis",
    description: "Data-driven insights for informed business decisions.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "Strategic Growth Planning",
    description: "Comprehensive strategies for sustainable business growth.",
    icon: <FaLightbulb className="w-8 h-8" />
  },
  {
    title: "Competitive Intelligence",
    description: "Stay ahead with AI-powered market intelligence.",
    icon: <FaSearch className="w-8 h-8" />
  },
  {
    title: "Business Process Optimization",
    description: "Streamline operations for maximum efficiency.",
    icon: <FaCogs className="w-8 h-8" />
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology.",
    icon: <FaRocket className="w-8 h-8" />
  },
  {
    title: "Risk Management",
    description: "Proactive risk assessment and mitigation strategies.",
    icon: <FaShieldAlt className="w-8 h-8" />
  }
];

const technologies = [
  {
    name: "AI Analytics",
    description: "Advanced business analytics platforms"
  },
  {
    name: "Market Research",
    description: "AI-powered market research tools"
  },
  {
    name: "Business Intelligence",
    description: "Comprehensive business intelligence systems"
  },
  {
    name: "Strategy Planning",
    description: "Strategic planning and execution tools"
  }
];

export default function BusinessDevelopment() {
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
            Business <span className="gradient-text">Development</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            AI-powered strategies to drive sustainable business growth
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
                At Synthotech.ai, we combine AI technology with proven business development strategies to help organizations achieve sustainable growth. Our data-driven approach ensures that every business decision is backed by comprehensive market analysis and insights.
              </p>
              <p className="text-gray-300 mb-4">
                We leverage advanced AI algorithms to identify market opportunities, optimize business processes, and develop effective growth strategies. This allows us to help businesses navigate complex market dynamics and maintain a competitive edge.
              </p>
              <p className="text-gray-300">
                Our comprehensive business development services are designed to help organizations of all sizes achieve their growth objectives through intelligent, targeted, and measurable strategies.
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
              Comprehensive business development services powered by AI
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
                <p className="text-gray-300">We analyze your current business position and market opportunities.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Strategy</h3>
                <p className="text-gray-300">We develop a comprehensive growth strategy tailored to your goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Implementation</h3>
                <p className="text-gray-300">We execute your growth strategy with AI-powered tools and automation.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">4. Growth</h3>
                <p className="text-gray-300">We continuously optimize and scale your business operations.</p>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve sustainable business growth with AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your Growth Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 