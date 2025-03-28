'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaSearch, FaHandshake, FaChartLine, FaRocket, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: "AI Talent Matching",
    description: "Intelligent matching of skilled professionals to your needs.",
    icon: <FaSearch className="w-8 h-8" />
  },
  {
    title: "Team Integration",
    description: "Seamless integration of augmented staff with your team.",
    icon: <FaUsers className="w-8 h-8" />
  },
  {
    title: "Quality Assurance",
    description: "Rigorous vetting and quality control processes.",
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "Performance Tracking",
    description: "AI-powered performance monitoring and analytics.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "Rapid Deployment",
    description: "Quick onboarding and project ramp-up.",
    icon: <FaRocket className="w-8 h-8" />
  },
  {
    title: "Client Partnership",
    description: "Dedicated support and ongoing collaboration.",
    icon: <FaHandshake className="w-8 h-8" />
  }
];

export default function StaffAugmentation() {
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
            Staff <span className="gradient-text">Augmentation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            AI-powered talent solutions to scale your team effectively
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
                At Synthotech.ai, we revolutionize staff augmentation through AI-powered talent matching and management. Our approach combines cutting-edge technology with human expertise to deliver exceptional results.
              </p>
              <p className="text-gray-300 mb-4">
                We leverage advanced AI algorithms to identify and match the perfect talent for your specific needs, ensuring seamless integration and maximum productivity. Our comprehensive vetting process and quality assurance measures guarantee the highest standards.
              </p>
              <p className="text-gray-300">
                Our staff augmentation services help organizations scale their teams efficiently while maintaining quality and reducing time-to-hire through intelligent automation and data-driven decision-making.
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
              Comprehensive staff augmentation services powered by AI
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
                <h3 className="text-xl font-bold mb-4">1. Requirements</h3>
                <p className="text-gray-300">We analyze your team needs and project requirements.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Matching</h3>
                <p className="text-gray-300">We match the perfect talent using AI algorithms.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">3. Integration</h3>
                <p className="text-gray-300">We ensure smooth onboarding and team integration.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">4. Management</h3>
                <p className="text-gray-300">We provide ongoing support and performance tracking.</p>
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
              Ready to Scale Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you find the perfect talent for your team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Start Your Talent Search
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 