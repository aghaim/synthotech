'use client';

import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. What Are Cookies</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Remembering your preferences</li>
                <li>Understanding how you use our website</li>
                <li>Improving your browsing experience</li>
                <li>Providing relevant content and advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-2">2.1 Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Security features</li>
                <li>Account authentication</li>
                <li>Session management</li>
                <li>Load balancing</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.2 Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                We use analytics cookies to understand how visitors interact with our website by:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Collecting and reporting usage statistics</li>
                <li>Identifying popular pages and features</li>
                <li>Measuring the effectiveness of our marketing</li>
                <li>Improving website performance</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.3 Functional Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies enable enhanced functionality and personalization by:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Remembering your preferences</li>
                <li>Storing your language settings</li>
                <li>Maintaining your shopping cart</li>
                <li>Providing personalized content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.4 Marketing Cookies</h3>
              <p className="text-gray-300 mb-4">
                We use marketing cookies to deliver relevant advertisements by:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Tracking your browsing behavior</li>
                <li>Measuring the effectiveness of our ads</li>
                <li>Delivering targeted content</li>
                <li>Managing advertising frequency</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. How to Control Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use services from third parties that may also set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Google Analytics</li>
                <li>Social media platforms</li>
                <li>Advertising networks</li>
                <li>Payment processors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: privacy@synthotech.ai<br />
                Address: 123 Tech Street, Digital City, DC 12345, United States
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 