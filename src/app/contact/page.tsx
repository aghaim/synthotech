'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import Modal from '@/components/Modal';
import Script from 'next/script';

type ModalType = 'success' | 'error';

interface ModalConfig {
  type: ModalType;
  title: string;
  message: string;
}

const services = [
  { id: 1, name: 'AI Solutions' },
  { id: 2, name: 'Software Development' },
  { id: 3, name: 'Website Development' },
  { id: 4, name: 'Mobile App Development' },
  { id: 5, name: 'Digital Marketing' },
  { id: 6, name: 'Process Reengineering' },
  { id: 7, name: 'Business Development' },
  { id: 8, name: 'Enterprise Applications' },
  { id: 9, name: 'Staff Augmentation' }
];

declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, parameters: {
        sitekey: string;
        callback: string | ((token: string) => void);
        'expired-callback'?: string | (() => void);
      }) => void;
    };
    handleRecaptchaChange?: (token: string) => void;
    handleRecaptchaExpired?: () => void;
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    subject: '',
    message: '',
    selectedServices: [] as number[]
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    type: 'success',
    title: '',
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleRecaptchaChange = useCallback((token: string) => {
    setRecaptchaToken(token);
    setRecaptchaError(null);
  }, []);

  const handleRecaptchaExpired = useCallback(() => {
    setRecaptchaToken(null);
  }, []);

  useEffect(() => {
    if (!siteKey) {
      setRecaptchaError('reCAPTCHA is not configured. Please contact the administrator.');
      return;
    }

    // Add global callback functions
    (window as any).handleRecaptchaChange = handleRecaptchaChange;
    (window as any).handleRecaptchaExpired = handleRecaptchaExpired;

    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        try {
          window.grecaptcha.render('recaptcha', {
            sitekey: siteKey,
            callback: 'handleRecaptchaChange',
            'expired-callback': 'handleRecaptchaExpired'
          });
          setRecaptchaError(null);
        } catch (error) {
          setRecaptchaError('Failed to initialize reCAPTCHA. Please try again later.');
          console.error('reCAPTCHA initialization error:', error);
        }
      }
    };

    // Add a small delay to ensure the script is loaded
    const timer = setTimeout(() => {
      if (window.grecaptcha) {
        loadRecaptcha();
      } else {
        setRecaptchaError('reCAPTCHA script failed to load. Please refresh the page.');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      // Clean up global callbacks
      delete (window as any).handleRecaptchaChange;
      delete (window as any).handleRecaptchaExpired;
    };
  }, [siteKey, handleRecaptchaChange, handleRecaptchaExpired]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (serviceId: number) => {
    setFormData(prev => {
      const selectedServices = prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      return { ...prev, selectedServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!siteKey) {
      setModalConfig({
        type: 'error',
        title: 'Form Submission Disabled',
        message: 'reCAPTCHA is not configured. Please contact the administrator.'
      });
      setShowModal(true);
      return;
    }

    if (!recaptchaToken) {
      setModalConfig({
        type: 'error',
        title: 'Verification Required',
        message: 'Please complete the reCAPTCHA verification.'
      });
      setShowModal(true);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        industry: '',
        subject: '',
        message: '',
        selectedServices: []
      });
      setRecaptchaToken(null);
      
      setModalConfig({
        type: 'success',
        title: 'Message Sent Successfully!',
        message: 'Thank you for contacting us. We will get back to you soon.'
      });
      setShowModal(true);
    } catch (error) {
      setStatus('error');
      setModalConfig({
        type: 'error',
        title: 'Submission Failed',
        message: 'There was an error submitting your message. Please try again.'
      });
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=explicit`}
        strategy="afterInteractive"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team of experts</p>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-lg shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-300">
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Services of Interest
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map(service => (
                      <label key={service.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-300">{service.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-center">
                  <div id="recaptcha"></div>
                </div>
                {recaptchaError && (
                  <div className="text-center text-red-500">
                    {recaptchaError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !recaptchaToken || !siteKey}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </div>
  );
} 