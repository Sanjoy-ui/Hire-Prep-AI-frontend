import React from 'react'
import { BsRobot } from 'react-icons/bs'
import { useState } from 'react'
import { motion } from 'motion/react'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { HiArrowSmallRight } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const navigate = useNavigate()

  const sections = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'Interview History', href: '/history' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
    ],
    resources: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Help Center', href: '#help' },
      { label: 'Community', href: '#community' },
      { label: 'Status', href: '#status' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/useragreement' },
      { label: 'Terms of Service', href: '/useragreement' },
      { label: 'Cookie Policy', href: 'useragreement' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: FaTwitter, href: '#twitter', label: 'Twitter' },
    { icon: FaLinkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: FaGithub, href: '#github', label: 'GitHub' },
    { icon: FaInstagram, href: '#instagram', label: 'Instagram' },
  ]

  return (
    <footer className='bg-gray-950 text-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='lg:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='bg-green-600 text-white p-2 rounded-lg'>
                <BsRobot size={20} />
              </div>
              <h3 className='font-bold text-xl'>HirePrep AI</h3>
            </div>
            <p className='text-gray-400 text-sm mb-6'>
              AI-powered interview preparation platform designed to improve communication skills, technical depth and professional confidence.
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, color: '#10b981' }}
                  className='text-gray-400 hover:text-green-600 transition'>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className='font-semibold text-white mb-4'>Product</h4>
            <ul className='space-y-3'>
              {sections.product.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className='text-gray-400 hover:text-green-600 transition text-sm'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className='font-semibold text-white mb-4'>Company</h4>
            <ul className='space-y-3'>
              {sections.company.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className='text-gray-400 hover:text-green-600 transition text-sm'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className='font-semibold text-white mb-4'>Resources</h4>
            <ul className='space-y-3'>
              {sections.resources.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className='text-gray-400 hover:text-green-600 transition text-sm'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <h4 className='font-semibold text-white mb-4'>Stay Updated</h4>
            <p className='text-gray-400 text-sm mb-4'>
              Get the latest interview tips and platform updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className='flex flex-col gap-3'>
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition text-sm'
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition text-sm'>
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
                {!subscribed && <HiArrowSmallRight size={16} />}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 my-8'></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Copyright */}
          <div className='text-gray-400 text-sm'>
            <p>© 2025 HirePrep AI. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className='flex gap-6 text-sm'>
            {sections.legal.map((item, idx) => (
              <a onClick={item.onclick}
                key={idx}
                href={item.href}
                className='text-gray-400 hover:text-green-600 transition'>
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <FaEnvelope size={14} />
            <a href='mailto:sanjoydeb404@gmail.com' className='hover:text-green-600 transition'>
              support@hireprep.ai
            </a>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-8 pt-8 border-t border-gray-800'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400'>
            <div>
              <p className='font-semibold text-white mb-2'>Quick Features</p>
              <p>AI-powered mock interviews, real-time feedback, performance analytics, and interview tracking.</p>
            </div>
            <div>
              <p className='font-semibold text-white mb-2'>Supported By</p>
              <p>Built with cutting-edge AI technology to help professionals master their interviews.</p>
            </div>
            <div>
              <p className='font-semibold text-white mb-2'>Made with ❤️</p>
              <p>Dedicated to helping job seekers and professionals achieve their career goals.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

