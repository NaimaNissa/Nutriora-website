'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: '👩',
    rating: 5,
    comment: 'Nutriora completely transformed my relationship with food. The personalized plan made it so easy to stick to my goals, and I\'ve never felt better!',
  },
  {
    name: 'Michael Chen',
    role: 'Busy Professional',
    image: '👨',
    rating: 5,
    comment: 'As someone with a hectic schedule, Nutriora\'s meal planning feature has been a game-changer. I finally have energy throughout the day.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'New Mom',
    image: '👩',
    rating: 5,
    comment: 'The expert guidance from nutritionists helped me get back on track after pregnancy. The support and accountability made all the difference.',
  },
]

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary-100/50 hover:border-primary-300 h-full flex flex-col">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-16 h-16 text-primary-500" />
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/0 via-primary-100/0 to-peach/0 group-hover:from-primary-100/30 group-hover:via-primary-100/20 group-hover:to-peach/20 transition-all duration-300 pointer-events-none rounded-3xl" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Stars Rating */}
        <div className="flex mb-4 sm:mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.1 }}
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <div className="flex-1 mb-4 sm:mb-6">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg italic relative">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary-300 absolute -top-1 sm:-top-2 -left-1 sm:-left-2 opacity-50" />
            <span className="pl-3 sm:pl-4">{testimonial.comment}</span>
          </p>
        </div>

        {/* User Info */}
        <div className="flex items-center pt-4 sm:pt-6 border-t border-gray-200">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mr-3 sm:mr-4 shadow-lg ring-2 sm:ring-4 ring-primary-100"
          >
            {testimonial.image}
          </motion.div>
          <div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-peach/20 relative overflow-hidden scroll-mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-peach rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
            What Our Users Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real stories from people who transformed their health with Nutriora
          </p>
        </motion.div>

        {/* Mobile/Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`mobile-${testimonial.name}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: Organized Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <TestimonialCard testimonial={testimonials[0]} index={0} />
          </motion.div>

          {/* Center Featured Testimonial - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            className="relative group lg:scale-105"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-primary-400 h-full flex flex-col">
              {/* Featured Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ FEATURED
                </span>
              </div>

              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-20 h-20 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Stars Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Star className="w-7 h-7 fill-yellow-300 text-yellow-300 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-8">
                  <p className="text-white leading-relaxed text-xl font-medium relative">
                    <Quote className="w-8 h-8 text-white/30 absolute -top-3 -left-3" />
                    <span className="pl-6">{testimonials[1].comment}</span>
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center pt-6 border-t border-white/20">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mr-4 shadow-lg ring-4 ring-white/20"
                  >
                    {testimonials[1].image}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-white text-xl">{testimonials[1].name}</h3>
                    <p className="text-sm text-white/90 font-medium">{testimonials[1].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <TestimonialCard testimonial={testimonials[2]} index={2} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
