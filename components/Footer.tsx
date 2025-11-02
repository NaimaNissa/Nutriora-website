'use client'

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Nutriora</h3>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Your trusted partner in nutrition and wellness. 
              We're committed to helping you achieve your health goals through 
              personalized plans and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm sm:text-base hover:text-primary-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:text-primary-500 transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:text-primary-500 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:text-primary-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:text-primary-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nutriora.com" className="text-sm sm:text-base hover:text-primary-500 transition-colors break-words">
                  info@nutriora.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm sm:text-base hover:text-primary-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">123 Wellness St, Health City, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Nutriora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
