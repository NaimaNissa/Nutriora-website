'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Logo, { LeafIcon } from '@/components/Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-1 sm:space-x-2">
              <Logo size="md" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-black">Nutri</span>
                <span className="text-primary-500 relative inline-block">
                  <span className="absolute -top-0.5 left-0.5">
                    <LeafIcon className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  </span>
                  ora
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm xl:text-base text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium px-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Download App Buttons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Download Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {/* App Store Button */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 lg:gap-2 bg-gray-900 hover:bg-gray-800 text-white px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Apple Logo */}
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                
                {/* App Store Text */}
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[7px] lg:text-[8px] font-medium">Download on the</span>
                  <span className="text-[10px] lg:text-xs font-semibold">App Store</span>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 lg:gap-2 bg-gray-900 hover:bg-gray-800 text-white px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Google Play Logo */}
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {/* Green (top section) */}
                  <polygon
                    points="1,1 12,12 1,12"
                    fill="#00D9A5"
                  />
                  {/* Yellow (left section) */}
                  <polygon
                    points="1,1 1,12 12,12"
                    fill="#FFD93D"
                  />
                  {/* Blue (right section) */}
                  <polygon
                    points="12,12 23,12 12,23"
                    fill="#4ECDC4"
                  />
                  {/* Red (bottom section) */}
                  <polygon
                    points="1,12 12,12 1,23"
                    fill="#FF6B6B"
                  />
                </svg>
                
                {/* Google Play Text */}
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[7px] lg:text-[8px] font-medium">GET IT ON</span>
                  <span className="text-[10px] lg:text-xs font-semibold">Google Play</span>
                </div>
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <a href="#" className="flex items-center space-x-2">
                    <Logo size="md" />
                    <div className="text-2xl font-bold">
                      <span className="text-black">Nutri</span>
                      <span className="text-primary-500 relative inline-block">
                        <span className="absolute -top-0.5 left-0.5">
                          <LeafIcon className="w-2.5 h-2.5" />
                        </span>
                        ora
                      </span>
                    </div>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-primary-100 hover:text-primary-500 rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                  
                  {/* Download App Buttons for Mobile */}
                  <div className="flex flex-col gap-3 mt-6">
                    {/* App Store Button */}
                    <motion.a
                      href="#download"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Apple Logo */}
                      <svg
                        className="w-8 h-8 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      
                      {/* App Store Text */}
                      <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-medium">Download on the</span>
                        <span className="text-base font-semibold">App Store</span>
                      </div>
                    </motion.a>

                    {/* Google Play Button */}
                    <motion.a
                      href="#download"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Google Play Logo */}
                      <svg
                        className="w-8 h-8 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        {/* Green (top section) */}
                        <polygon
                          points="1,1 12,12 1,12"
                          fill="#00D9A5"
                        />
                        {/* Yellow (left section) */}
                        <polygon
                          points="1,1 1,12 12,12"
                          fill="#FFD93D"
                        />
                        {/* Blue (right section) */}
                        <polygon
                          points="12,12 23,12 12,23"
                          fill="#4ECDC4"
                        />
                        {/* Red (bottom section) */}
                        <polygon
                          points="1,12 12,12 1,23"
                          fill="#FF6B6B"
                        />
                      </svg>
                      
                      {/* Google Play Text */}
                      <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-medium">GET IT ON</span>
                        <span className="text-base font-semibold">Google Play</span>
                      </div>
                    </motion.a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
