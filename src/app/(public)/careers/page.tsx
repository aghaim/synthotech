'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "AI Solutions",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Lead AI development projects and mentor junior developers."
  },
  {
    title: "Full Stack Developer",
    department: "Software Development",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Build and maintain scalable web applications using modern technologies."
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Create beautiful and intuitive user interfaces for our products."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Drive product development and strategy for our AI solutions."
  }
];

const benefits = [
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Career Growth",
    description: "Professional development and learning opportunities"
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Team Culture",
    description: "Collaborative and inclusive work environment"
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Learning & Development",
    description: "Training programs and skill development"
  }
];

export default function CareersPage() {
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
            Join Our <span className="gradient-text">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Be part of the future of AI and technology
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Join Section */}
        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-gray text-3xl font-bold text-center mb-12"
          >
            Why Join Synthotech.ai?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-gray text-3xl font-bold text-center mb-12"
          >
            Open Positions
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <FaBriefcase className="mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <FaUsers className="mr-2" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <FaRocket className="mr-2" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    Apply Now
                  </motion.button>
                </div>
                <p className="text-gray-300">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-gray text-3xl font-bold text-center mb-12"
          >
            Application Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                <FaHeart className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Apply</h3>
              <p className="text-gray-300">
                Submit your application with your resume and cover letter
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Interview</h3>
              <p className="text-gray-300">
                Meet with our team to discuss your experience and potential
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                <FaRocket className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Join</h3>
              <p className="text-gray-300">
                Start your journey with Synthotech.ai and make an impact
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
} 