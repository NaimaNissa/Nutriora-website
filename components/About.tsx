'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const images = [
    {
      src: '/images/begin-wellness.png',
      alt: 'Begin Wellness - Track your food, monitor your progress, and achieve your health goals',
      initialY: -30,
      animationDelay: 0,
    },
    {
      src: '/images/personalized-nutrition.png',
      alt: 'Personalized Nutrition - Custom nutrition plans designed for your lifestyle',
      initialY: -50,
      animationDelay: 0.2,
    },
    {
      src: '/images/smart-insights.png',
      alt: 'Smart Health Insights - AI-powered analysis and real-time feedback',
      initialY: -40,
      animationDelay: 0.4,
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-100 via-white to-peach/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 px-2">
              Your Journey to Better Health Starts Here
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed px-2">
              At Nutriora, we believe that nutrition is the foundation of wellness. 
              Our mission is to make personalized nutrition accessible to everyone, 
              helping you achieve your health goals through science-backed plans and 
              expert guidance.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
              With cutting-edge technology and a team of certified nutritionists, 
              we create customized meal plans, track your progress, and provide 
              continuous support throughout your wellness journey.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 px-2">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-500">10K+</div>
                <div className="text-sm sm:text-base text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-500">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Expert Nutritionists</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-500">95%</div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-8 lg:mt-0 overflow-hidden"
          >
            {/* Hovering Images Container */}
            <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: image.initialY, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 5, -5, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.8,
                      delay: image.animationDelay,
                    },
                    scale: {
                      duration: 0.8,
                      delay: image.animationDelay,
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                    },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: image.animationDelay + 0.8,
                    },
                    rotateY: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: image.animationDelay + 0.8,
                    },
                  }}
                  className={`w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80 ${
                    index === 0 
                      ? 'left-[15%] sm:left-[10%] top-[15%] sm:top-[10%]' 
                      : index === 1 
                      ? 'left-[50%] top-[50%] sm:top-[40%]' 
                      : 'left-[85%] sm:left-[75%] top-[25%] sm:top-[20%]'
                  }`}
                  style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) rotateY(${index * 15 - 15}deg)`,
                    zIndex: images.length - index,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 0,
                    zIndex: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative w-full h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 via-white to-peach p-2 sm:p-3 md:p-4 backdrop-blur-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-peach/10 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
