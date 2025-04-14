'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGlobe, FaBuilding, FaRobot, FaMobile, FaChartLine, FaHashtag, FaUsers, FaCogs } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    title: "AI Solutions",
    description: "Cutting-edge AI technology integration and consulting",
    href: "/services/ai-solutions",
    icon: "🤖"
  },
  {
    title: "Software Development",
    description: "Custom software solutions powered by cutting-edge AI technologies",
    href: "/services/software-development",
    icon: "💻"
  },
  {
    title: "Website Development",
    description: "Modern, responsive websites with AI-enhanced features",
    href: "/services/website-development",
    icon: "🌐"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    href: "/services/mobile-development",
    icon: "📱"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven digital marketing with AI analytics",
    href: "/services/digital-marketing",
    icon: "#️⃣"
  },
  {
    title: "Process Reengineering",
    description: "AI-driven process automation and optimization",
    href: "/services/process-reengineering",
    icon: "⚙️"
  },
  {
    title: "Business Development",
    description: "AI-powered business strategy and growth solutions",
    href: "/services/business-development",
    icon: "📈"
  },
  {
    title: "Enterprise Applications",
    description: "Scalable enterprise solutions with AI integration",
    href: "/services/enterprise-applications",
    icon: "🏢"
  },
  {
    title: "Staff Augmentation",
    description: "AI-specialized talent augmentation for your teams",
    href: "/services/staff-augmentation",
    icon: "👥"
  }
];

const features = [
  {
    title: 'Expert Team',
    description: 'Our team of AI specialists and developers bring years of industry experience.',
    icon: <FaUsers className="w-12 h-12" />
  },
  {
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge AI technology to deliver unique solutions.',
    icon: <FaRobot className="w-12 h-12" />
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control ensure reliable results.',
    icon: <FaCogs className="w-12 h-12" />
  }
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-gray text-5xl md:text-6xl font-bold mb-6"
          >
            Transforming Business Through
            <span className="gradient-text"> AI Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-gray text-xl md:text-2xl mb-8"
          >
            Empowering enterprises with cutting-edge AI solutions and digital transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="#services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-light text-center mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300 block cursor-pointer"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-light text-center mb-16"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-on-light mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-on-light mb-8"
          >
            Let's discuss how our AI solutions can drive your business forward
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 