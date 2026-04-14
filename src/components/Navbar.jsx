import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from "motion/react"
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout, HiChevronDown } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';
import ConfirmDialog from './ConfirmDialog'
import { showError } from '../utils/toast'

function Navbar() {
    const {userData} = useSelector((state)=>state.user)
    const [showCreditPopup, setShowCreditPopup] = useState(false)
    const [showUserPopup, setShowUserPopup] = useState(false)
    const [showProductMenu, setShowProductMenu] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAuth, setShowAuth] = useState(false)
    const navRef = useRef(null)

    const productLinks = [
        { label: 'Start Interview', href: '/', icon: '🎯' },
        { label: 'Interview History', href: '/history', icon: '📋' },
        { label: 'Pricing', href: '/pricing', icon: '💰' },
    ]

    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          setShowCreditPopup(false)
          setShowUserPopup(false)
          setShowProductMenu(false)
        }
      }

      const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setShowCreditPopup(false)
          setShowUserPopup(false)
          setShowProductMenu(false)
        }
      }

      document.addEventListener('keydown', handleEsc)
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('keydown', handleEsc)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
            dispatch(setUserData(null))
            setShowCreditPopup(false)
            setShowUserPopup(false)
            setShowProductMenu(false)
            setShowConfirm(false)
            navigate("/")

        } catch (error) {
            console.log(error)
            showError(error.response?.data?.message || "Logout failed")
        }
    }

    const closeAllMenus = () => {
        setShowCreditPopup(false)
        setShowUserPopup(false)
        setShowProductMenu(false)
    }

  return (
    <div className='bg-gray-950 sticky top-0 z-40 border-b border-gray-800'>
        <motion.div 
        ref={navRef}
        initial={{opacity:0 , y:-20}}
        animate={{opacity:1 , y:0}}
        transition={{duration: 0.3}}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
            
            {/* Logo Section */}
            <motion.div 
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/')}
            className='flex items-center gap-3 cursor-pointer'>
                <div className='bg-green-600 text-white p-2 rounded-lg'>
                    <BsRobot size={20}/>
                </div>
                <h1 className='font-bold text-xl text-white hidden md:block'>HirePrep AI</h1>
            </motion.div>

            {/* Center Navigation Links */}
            <div className='hidden lg:flex items-center gap-8'>
                <motion.a 
                whileHover={{ color: '#10b981' }}
                href='/' 
                className='text-gray-300 hover:text-green-600 transition text-sm font-medium'>
                    Features
                </motion.a>
                <motion.a 
                whileHover={{ color: '#10b981' }}
                href='/pricing' 
                className='text-gray-300 hover:text-green-600 transition text-sm font-medium'>
                    Pricing
                </motion.a>
                <motion.a 
                whileHover={{ color: '#10b981' }}
                href='/#how-it-works' 
                className='text-gray-300 hover:text-green-600 transition text-sm font-medium'>
                    How it Works
                </motion.a>
                <motion.a 
                whileHover={{ color: '#10b981' }}
                href='/contact' 
                className='text-gray-300 hover:text-green-600 transition text-sm font-medium'>
                    Contact
                </motion.a>
            </div>

            {/* Right Section - User Controls */}
            <div className='flex items-center gap-4 relative'>
                {/* Product Menu (for smaller screens) */}
                <div className='lg:hidden relative'>
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                        setShowProductMenu(!showProductMenu)
                        setShowUserPopup(false)
                        setShowCreditPopup(false)
                    }}
                    className='flex items-center gap-1 text-gray-300 hover:text-green-600 transition'
                    aria-label="Products menu">
                        <span className='text-sm font-medium'>Menu</span>
                        <HiChevronDown size={16} className={`transition transform ${showProductMenu ? 'rotate-180' : ''}`} />
                    </motion.button>

                    <AnimatePresence>
                        {showProductMenu && (
                            <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='absolute left-0 mt-2 w-56 bg-gray-900 shadow-xl border border-gray-800 rounded-lg p-3 z-50'>
                                {productLinks.map((link, idx) => (
                                    <motion.button
                                    key={idx}
                                    onClick={() => {
                                        navigate(link.href)
                                        closeAllMenus()
                                    }}
                                    whileHover={{ x: 4 }}
                                    className='w-full text-left px-3 py-2 text-gray-300 hover:text-green-600 hover:bg-gray-800 rounded-lg transition text-sm flex items-center gap-2'>
                                        <span>{link.icon}</span>
                                        {link.label}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Credits Button */}
                {userData && (
                    <div className='relative'>
                        <motion.button 
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            setShowCreditPopup(!showCreditPopup)
                            setShowUserPopup(false)
                            setShowProductMenu(false)
                        }} 
                        aria-label="Credits"
                        className='flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-green-600 font-medium transition text-sm border border-gray-700'>
                            <BsCoin size={18}/>
                            <span>{userData?.credits || 0}</span>
                        </motion.button>

                        <AnimatePresence>
                            {showCreditPopup && (
                                <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className='absolute right-0 mt-2 w-72 bg-gray-900 shadow-xl border border-gray-800 rounded-lg p-4 z-50'>
                                    <div className='mb-4'>
                                        <p className='text-sm text-gray-300 mb-2'>Current Credits</p>
                                        <p className='text-2xl font-bold text-green-600'>{userData?.credits || 0}</p>
                                    </div>
                                    <p className='text-sm text-gray-400 mb-4'>Each interview uses 1 credit. Upgrade to get unlimited interviews.</p>
                                    <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        navigate("/pricing")
                                        closeAllMenus()
                                    }} 
                                    className='w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition'>
                                        Buy more credits
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* User Menu */}
                <div className='relative'>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                        if (!userData) {
                            setShowAuth(true)
                            return
                        }
                        setShowUserPopup(!showUserPopup)
                        setShowCreditPopup(false)
                        setShowProductMenu(false)
                    }} 
                    aria-label="User menu"
                    className='w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center font-semibold transition border border-green-500'>
                        {userData ? userData?.name.slice(0,1).toUpperCase() : <FaUserAstronaut size={18}/>}
                    </motion.button>

                    <AnimatePresence>
                        {showUserPopup && (
                            <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='absolute right-0 mt-2 w-56 bg-gray-900 shadow-xl border border-gray-800 rounded-lg p-4 z-50'>
                                <div className='mb-4 pb-4 border-b border-gray-800'>
                                    <p className='text-sm text-gray-400'>Welcome back</p>
                                    <p className='text-lg font-semibold text-white'>{userData?.name}</p>
                                    <p className='text-xs text-gray-500 mt-1'>{userData?.email}</p>
                                </div>

                                <motion.button 
                                whileHover={{ x: 4 }}
                                onClick={() => {
                                    navigate("/history")
                                    closeAllMenus()
                                }} 
                                className='w-full text-left px-3 py-2 text-gray-300 hover:text-green-600 hover:bg-gray-800 rounded-lg transition text-sm flex items-center gap-2 mb-2'>
                                    📋 Interview History
                                </motion.button>

                                <motion.button 
                                whileHover={{ x: 4 }}
                                onClick={() => {
                                    navigate("/pricing")
                                    closeAllMenus()
                                }} 
                                className='w-full text-left px-3 py-2 text-gray-300 hover:text-green-600 hover:bg-gray-800 rounded-lg transition text-sm flex items-center gap-2 mb-4'>
                                    💰 Buy Credits
                                </motion.button>

                                <div className='border-t border-gray-800 pt-4'>
                                    <motion.button 
                                    whileHover={{ x: 4 }}
                                    onClick={() => setShowConfirm(true)}
                                    className='w-full text-left px-3 py-2 text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-lg transition text-sm flex items-center gap-2'>
                                        <HiOutlineLogout size={16}/>
                                        Logout
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Start Interview Button (when not logged in) */}
                {!userData && (
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAuth(true)}
                    className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition'>
                        Get Started
                    </motion.button>
                )}
            </div>
        </motion.div>

        {showAuth && <AuthModel onClose={() => setShowAuth(false)}/>}

        {showConfirm && (
            <ConfirmDialog
                title="Logout?"
                message="Are you sure you want to logout?"
                onConfirm={handleLogout}
                onCancel={() => setShowConfirm(false)}
                confirmText="Logout"
                cancelText="Cancel"
                isDangerous={true}
            />
        )}
    </div>
  )
}

export default Navbar
