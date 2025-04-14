'use client';

import { motion } from 'framer-motion';
import { FaCogs, FaChartBar, FaRobot, FaCheckCircle, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions.",
    icon: <FaCogs className="w-8 h-8" />
  },
  {
    title: "Workflow Optimization",
    description: "Enhance efficiency through data-driven workflow improvements.",
    icon: <FaChartBar className="w-8 h-8" />
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI into existing business processes.",
    icon: <FaRobot className="w-8 h-8" />
  },
  {
    title: "Quality Assurance",
    description: "Ensure consistent quality through automated monitoring.",
    icon: <FaCheckCircle className="w-8 h-8" />
  },
  {
    title: "Team Collaboration",
    description: "Foster better teamwork with optimized communication channels.",
    icon: <FaUsers className="w-8 h-8" />
  },
  {
    title: "Performance Monitoring",
    description: "Track and improve process performance in real-time.",
    icon: <FaChartLine className="w-8 h-8" />
  }
];

const technologies = [
  {
    name: "RPA Tools",
    description: "Robotic Process Automation platforms"
  },
  {
    name: "Workflow Automation",
    description: "Business process automation software"
  },
  {
    name: "AI/ML Platforms",
    description: "Artificial Intelligence and Machine Learning tools"
  },
  {
    name: "Analytics Platforms",
    description: "Process analytics and monitoring systems"
  }
];

export default function ProcessReengineering() {
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
            Process <span className="gradient-text">Reengineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Transform your business processes with AI-powered optimization
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
                At Synthotech.ai, we revolutionize business processes through intelligent automation and optimization. Our approach combines cutting-edge AI technology with proven reengineering methodologies to deliver transformative results.
              </p>
              <p className="text-gray-300 mb-4">
                We analyze existing processes, identify bottlenecks, and implement AI-driven solutions that enhance efficiency, reduce costs, and improve overall business performance.
              </p>
              <p className="text-gray-300">
                Our comprehensive process reengineering services help organizations adapt to changing market conditions and maintain a competitive edge through continuous improvement.
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
              Comprehensive process reengineering services powered by AI
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
                <p className="text-gray-300">We analyze your current processes and identify areas for improvement.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Design</h3>
                <p className="text-gray-300">We design optimized processes with AI integration points.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Implementation</h3>
                <p className="text-gray-300">We implement the new processes with automated workflows.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">4. Optimization</h3>
                <p className="text-gray-300">We continuously optimize processes based on performance data.</p>
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
              Ready to Transform Your Processes?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you optimize your business processes with AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your Process Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 