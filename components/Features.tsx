'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, TrendingUp, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Personalized Plans',
    description: 'Custom nutrition plans designed specifically for your body, goals, and lifestyle.',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Monitor your progress with intuitive tracking tools and achieve your wellness goals.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Access to certified nutritionists and wellness experts when you need them.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Insights',
    description: 'AI-powered analysis of your health data to provide actionable recommendations.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your health data is encrypted and stored securely with complete privacy.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Approach',
    description: 'Comprehensive wellness covering nutrition, fitness, and mental wellbeing.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
            Why Choose Nutriora?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to take control of your nutrition and wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-100 via-white to-peach/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
