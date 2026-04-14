import React, { useState } from 'react'
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function TermsAndCons() {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState({ 0: true })

  const sections = [
    {
      id: 0,
      title: '1. Agreement to Terms',
      content: 'By accessing and using the interviewIQ platform ("Service"), including our website and mobile application, you agree to be bound by these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 1,
      title: '2. Description of Service',
      content: 'HirePrep AI is an online platform designed to help users prepare for interviews through interactive practice, feedback, and analytics. The Service provides:\n• Interview preparation tools and resources\n• Practice interview sessions\n• Performance analytics and feedback\n• Educational content and guidance\n• Payment processing for premium features'
    },
    {
      id: 2,
      title: '3. User Accounts and Registration',
      content: 'Account Creation: To access certain features of the Service, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your password and account credentials.\n\nAccount Eligibility: You must be at least 18 years of age or have parental consent. You represent and warrant that all information provided is true and accurate.\n\nAccount Responsibility: You are solely responsible for all activity that occurs under your account, including all uses of your login credentials and all consequences of unauthorized access to your account.'
    },
    {
      id: 3,
      title: '4. User Conduct and Acceptable Use',
      content: 'Prohibited Conduct: You agree NOT to violate any applicable laws, infringe on intellectual property rights, harass or harm any person, transmit viruses or malicious code, attempt unauthorized access, reverse engineer the Service, or engage in fraud or deception.\n\nContent Guidelines: Any content you upload must be original or appropriately licensed, not infringe on third-party rights, not contain offensive or inappropriate material, and comply with all applicable laws.'
    },
    {
      id: 4,
      title: '5. Intellectual Property Rights',
      content: 'Our Intellectual Property: All content provided by interviewIQ, including text, graphics, logos, images, audio, video, and the overall design, are the exclusive property of interviewIQ or its licensors and are protected by international copyright laws.\n\nLimited License: We grant you a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes.\n\nUser-Generated Content: By submitting content to the Service, you grant interviewIQ a worldwide, royalty-free, perpetual license to use, modify, and distribute such content for operating and improving the Service.'
    },
    {
      id: 5,
      title: '6. Payment and Billing',
      content: 'Payment Terms: All fees are quoted in the currency specified at purchase. Payment is due upon purchase or as stated in your subscription plan.\n\nRecurring Charges: Subscription plans renew automatically unless cancelled. You authorize us to charge your payment method for all recurring charges.\n\nRefund Policy: Refund requests must be made within 7 days of purchase. We reserve the right to deny refunds for misuse. Subscription refunds are issued on a pro-rata basis.\n\nFailed Payments: If a payment fails, we will attempt to recharge. Your access may be suspended if payment is not received.'
    },
    {
      id: 6,
      title: '7. Limitation of Liability',
      content: 'No Warranties: THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.\n\nLimitation of Damages: TO THE MAXIMUM EXTENT PERMITTED BY LAW, we shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.\n\nAvailability: We do not guarantee that the Service will be uninterrupted or error-free. We are not responsible for system downtime, data loss, errors, or unauthorized access.'
    },
    {
      id: 7,
      title: '8. Indemnification',
      content: 'You agree to indemnify and hold harmless interviewIQ from any claims, damages, losses, or expenses arising from your use of the Service, violation of these Terms, infringement of intellectual property rights, any content you submit, or any harmful or illegal activity on your account.'
    },
    {
      id: 8,
      title: '9. Termination',
      content: 'Termination by You: You may terminate your account at any time by notifying us in writing or through account settings.\n\nTermination by Us: We may terminate or suspend your account immediately if you violate these Terms, engage in illegal activity, misuse the Service, or if we determine it necessary for legal or security reasons.\n\nEffect of Termination: Upon termination, your right to use the Service ceases immediately. Outstanding payments remain due.'
    },
    {
      id: 9,
      title: '10. Privacy and Data Protection',
      content: 'Your use of the Service is governed by our Privacy Policy. We collect and process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable. Please review our Privacy Policy for detailed information about how we handle your data.'
    },
    {
      id: 10,
      title: '11. Third-Party Services and Links',
      content: 'The Service may contain links to third-party websites and services. We are not responsible for the availability or accuracy of third-party content, the practices or policies of third-party providers, or any damages resulting from your use of third-party services. Your use of third-party services is subject to their own terms and conditions.'
    },
    {
      id: 11,
      title: '12. Modifications to Service and Terms',
      content: 'Service Changes: We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice.\n\nTerms Updates: We may update these Terms and Conditions at any time. Significant changes will be announced via email or prominent notice on our platform. Your continued use of the Service constitutes acceptance of the revised Terms.'
    },
    {
      id: 12,
      title: '13. Dispute Resolution',
      content: 'Informal Resolution: Before initiating formal proceedings, we encourage you to contact us directly to resolve disputes.\n\nGoverning Law: These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which interviewIQ is incorporated.\n\nJurisdiction: You agree to submit to the exclusive jurisdiction of the courts located in the jurisdiction where interviewIQ is incorporated.\n\nLimitation Period: Any claim must be brought within one (1) year after the cause of action arises.'
    },
    {
      id: 13,
      title: '14. Contact Information',
      content: 'If you have questions about these Terms and Conditions or the Service, please contact us at:\n\nEmail: support@interviewiq.com\nWebsite: interviewiq.com\nSupport Portal: www.interviewiq.com/support'
    }
  ]

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 flex flex-col'>
      <Navbar />

      <div className='flex-1 py-12 px-6'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='flex items-start gap-4 mb-12'>
            <button
              onClick={() => navigate("/")}
              className='mt-2 p-3 rounded-full bg-white shadow hover:shadow-md transition'
            >
              <FaArrowLeft className='text-gray-600' />
            </button>

            <div className="w-full">
              <h1 className="text-4xl font-bold text-gray-800">
                Terms and Conditions
              </h1>
              <p className="text-gray-500 mt-3 text-lg">
                Last Updated: April 14, 2026
              </p>
            </div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white rounded-2xl p-8 shadow-md mb-8 border border-emerald-100'
          >
            <p className='text-gray-700 leading-relaxed'>
              Welcome to HirePrep AI. These Terms and Conditions ("Terms") govern your access to and use of our platform. By accessing interviewIQ, you agree to be bound by these terms. If you do not agree, please do not use our service.
            </p>
          </motion.div>

          {/* Accordion Sections */}
          <div className='space-y-4'>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-emerald-300 transition'
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className='w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition'
                >
                  <h2 className='text-lg font-semibold text-gray-800 text-left'>
                    {section.title}
                  </h2>
                  <div className='text-emerald-600 text-xl flex-shrink-0 ml-4'>
                    {expandedSections[section.id] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedSections[section.id] ? 1 : 0,
                    height: expandedSections[section.id] ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'
                >
                  <div className='px-8 pb-6 border-t border-gray-100'>
                    <p className='text-gray-700 leading-relaxed whitespace-pre-wrap'>
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mt-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 text-white text-center shadow-lg'
          >
            <h3 className='text-2xl font-bold mb-3'>
              Questions? We're Here to Help
            </h3>
            <p className='mb-6 opacity-90'>
              If you have any questions about these terms, please contact our support team.
            </p>
            <a
              href='/contact'
              className='inline-block bg-white text-emerald-600 font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition' 
            >
              Contact Support
            </a>
          </motion.div>

          {/* Acceptance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='mt-8 text-center text-gray-600 text-sm'
          >
            <p>
              By accessing HirePrep AI, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsAndCons
