'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing or using the services provided by Synthotech.ai, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Description of Services</h2>
              <p className="text-gray-300 mb-4">
                Synthotech.ai provides AI-powered software development and technology solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Custom software development</li>
                <li>AI integration services</li>
                <li>Enterprise solutions</li>
                <li>Digital transformation consulting</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. User Accounts</h2>
              <p className="text-gray-300 mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                The service and its original content, features, and functionality are owned by Synthotech.ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. User Content</h2>
              <p className="text-gray-300 mb-4">
                Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                By using our services, you agree to pay all fees associated with your use of the service. All fees are non-refundable except as required by law. We may change our fees upon notice, but such changes will not affect fees for services already paid.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">7. Service Modifications</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the service is unavailable at any time or for any period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">8. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Synthotech.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">9. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">10. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">11. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">12. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: legal@synthotech.ai<br />
                Address: 123 Tech Street, Digital City, DC 12345, United States
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 