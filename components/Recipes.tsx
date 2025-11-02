'use client'

import { motion } from 'framer-motion'
import { Plus, Flame } from 'lucide-react'
import Image from 'next/image'

const meals = [
  {
    id: 1,
    mealType: 'Breakfast',
    image: '/images/meal-1.png',
    title: 'Avocado Toast with Poached Eggs',
    description: 'Whole grain toast topped with creamy avocado, perfectly poached eggs, and fresh cherry tomatoes',
    calories: '420 Kcal',
    protein: '18g',
    carbs: '35g',
  },
  {
    id: 2,
    mealType: 'Lunch',
    image: '/images/meal-2.png',
    title: 'Grilled Chicken Salad Bowl',
    description: 'Tender grilled chicken breast over mixed greens with quinoa, roasted vegetables, and lemon herb dressing',
    calories: '485 Kcal',
    protein: '42g',
    carbs: '28g',
  },
  {
    id: 3,
    mealType: 'Dinner',
    image: '/images/meal-3.png',
    title: 'Salmon Teriyaki with Brown Rice',
    description: 'Fresh salmon glazed with teriyaki sauce, served with steamed broccoli and brown rice',
    calories: '520 Kcal',
    protein: '38g',
    carbs: '45g',
  },
]

export default function Recipes() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
            Meals
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover delicious and nutritious meals for breakfast, lunch, and dinner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {meals.map((meal, index) => (
            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-2xl border-2 border-primary-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Meal Image */}
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden bg-white">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={meal.image}
                    alt={meal.title}
                    fill
                    className="object-contain p-2"
                    unoptimized
                    priority={index === 0}
                  />
                </motion.div>
                
                {/* Add Button - Top Right */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border-2 border-primary-500 rounded-full flex items-center justify-center shadow-lg z-10 group/btn hover:bg-primary-500 transition-colors"
                >
                  <Plus className="w-5 h-5 text-primary-500 group-hover/btn:text-white transition-colors" />
                </motion.button>
              </div>

              {/* Meal Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
                    {meal.mealType}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-primary-500 transition-colors">
                  {meal.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{meal.description}</p>
                
                {/* Nutrition Info */}
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Flame className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium">Calories</span>
                    </div>
                    <span className="text-sm font-semibold text-black">{meal.calories}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Protein</span>
                    <span className="text-sm font-semibold text-black">{meal.protein}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Carbs</span>
                    <span className="text-sm font-semibold text-black">{meal.carbs}</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/0 via-primary-100/0 to-peach/0 group-hover:from-primary-100/20 group-hover:via-primary-100/10 group-hover:to-peach/20 transition-all duration-300 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

