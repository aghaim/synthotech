'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { name: 'AI Solutions', href: '/services/ai-solutions' },
  { name: 'Software Development', href: '/services/software-development' },
  { name: 'Website Development', href: '/services/website-development' },
  { name: 'Mobile App Development', href: '/services/mobile-development' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Process Reengineering', href: '/services/process-reengineering' },
  { name: 'Business Development', href: '/services/business-development' },
  { name: 'Enterprise Applications', href: '/services/enterprise-applications' },
  { name: 'Staff Augmentation', href: '/services/staff-augmentation' }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' }
];

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/synthotech' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/company/synthotech' },
  { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com/synthotech' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Company Info */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Synthotech.ai</h2>
        <p className="text-gray-300 text-lg mb-6">Transforming Business Through AI Innovation</p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="text-gray-300 hover:text-white">
                  {service.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href} className="text-gray-300 hover:text-white">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href} className="text-gray-300 hover:text-white">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-4">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-start space-x-3"
            >
              <FaEnvelope className="text-blue-500 mt-1" />
              <span className="text-gray-300">contact@synthotech.ai</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start space-x-3"
            >
              <FaPhone className="text-blue-500 mt-1" />
              <span className="text-gray-300">+1 (234) 567-890</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start space-x-3"
            >
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span className="text-gray-300">
                123 AI Street<br />
                Tech City, TC 12345<br />
                United States
              </span>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Synthotech.ai. All rights reserved.</p>
      </div>
    </footer>
  );
} 