'use client'

import Image from 'next/image'

export default function Logo({ className = '', showText = false, size = 'md' }: { className?: string; showText?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  }
  
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Image */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0 overflow-visible`}>
        <Image
          src="/images/nutriora-logo.png"
          alt="Nutriora Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 40 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : 64}
          className="object-contain w-full h-full relative z-10"
          style={{ 
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))',
          }}
          unoptimized
          onError={(e) => {
            // Fallback to CSS-generated logo if image not found
            const target = e.target as HTMLImageElement
            if (target.parentElement) {
              target.style.display = 'none'
              const fallback = document.createElement('div')
              fallback.className = `absolute inset-0 ${sizeClasses[size]} rounded-lg overflow-hidden shadow-sm grid grid-cols-2 z-10`
              fallback.innerHTML = `
                <div class="bg-primary-100"></div>
                <div class="bg-white"></div>
                <div class="bg-white"></div>
                <div class="bg-peach"></div>
              `
              target.parentElement.appendChild(fallback)
            }
          }}
        />
      </div>
      
      {/* Logo text with leaf icon */}
      {showText && (
        <div className={`font-bold text-gray-900 ${textSizeClasses[size]}`}>
          <span className="text-black">Nutri</span>
          <span className="text-primary-500 relative">
            <span className="absolute -top-1 left-0.5">
              <svg className="w-2 h-2 fill-primary-500" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </span>
            ora
          </span>
        </div>
      )}
    </div>
  )
}

// Leaf icon SVG component
export function LeafIcon({ className = 'w-2.5 h-2.5' }: { className?: string }) {
  return (
    <svg className={className} fill="#22c55e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 1C4 1 2 2 1 4c-1 2 0 4 1 5 1 1 2 1 3 1 1 0 1 1 1 2 0 1 0 2 1 2 1 0 2-1 2-2 0-1-1-1-1-2s1-1 2-1c1 0 2-1 3-2 1-1 1-3 0-5C10 2 8 1 6 1z"/>
    </svg>
  )
}
