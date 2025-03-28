'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaStar, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
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
            About <span className="gradient-text">Synthotech.ai</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Empowering businesses with cutting-edge AI solutions and innovative technology
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect p-8 sm:p-12 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                Founded in 2024, Synthotech.ai emerged from a vision to revolutionize how businesses leverage artificial intelligence. Our journey began with a simple belief: every company, regardless of size or industry, should have access to cutting-edge AI solutions.
              </p>
              <p className="text-gray-300 mb-4">
                Today, we're proud to be at the forefront of AI innovation, helping businesses transform their operations, enhance customer experiences, and drive growth through intelligent automation and data-driven insights.
              </p>
              <p className="text-gray-300">
                Our commitment to excellence and continuous innovation has made us a trusted partner for businesses worldwide, from startups to Fortune 500 companies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Synthotech.ai
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible with AI, exploring new technologies and approaches to solve complex business challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in everything we do, from code quality to client service, ensuring exceptional results for our partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4 text-blue-500">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-gray-300">
                We believe in building lasting relationships with our clients, working together as true partners to achieve their business goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 