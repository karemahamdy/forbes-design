import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C00000', // Editorial red
          dark: '#111111', // Corporate black
          light: '#F9FAFB', // Background off-white
        },
        // We will match the neutral slate color palette for modern premium feel
        neutral: {
          50: '#F9F9F9',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111111',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Arial', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Match the style guide
        'h1': ['36px', { lineHeight: '1.2' }],
        'h2': ['28px', { lineHeight: '1.3' }],
        'h3': ['24px', { lineHeight: '1.35' }],
        'h4': ['20px', { lineHeight: '1.4' }],
        'h5': ['18px', { lineHeight: '1.4' }],
        'h6': ['16px', { lineHeight: '1.45' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)',
        'hover-card': '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.02)',
        'modal': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '48px',
        '5xl': '64px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: []
}
