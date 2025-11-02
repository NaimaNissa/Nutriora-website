'use client'

import { motion } from 'framer-motion'

export default function Download() {
  return (
    <section id="download" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-100 via-white to-peach/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
            Download the Nutriora App
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Get started on your wellness journey today. Download our app on your preferred platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* App Store Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] justify-center sm:justify-start"
          >
            {/* Apple Logo */}
            <svg
              className="w-10 h-10 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            
            {/* App Store Text */}
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-tight">Download on the</span>
              <span className="text-lg font-semibold leading-tight">App Store</span>
            </div>
          </motion.a>

          {/* Google Play Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] justify-center sm:justify-start"
          >
            {/* Google Play Logo - Right-pointing triangle with 4 colors */}
            <svg
              className="w-10 h-10 flex-shrink-0"
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
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-tight">GET IT ON</span>
              <span className="text-lg font-semibold leading-tight">Google Play</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

