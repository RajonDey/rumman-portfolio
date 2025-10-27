import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Vibrant Professional Blue
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Main primary
          600: '#2563EB',
          700: '#1D4ED8', // Used in gradients
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Secondary Colors - Deep Navy for contrast
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Accent Colors - Emerald for success/data
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Main accent
          600: '#059669',
          700: '#047857',
        },
        // Vibrant Purple for tech/data visualization
        purple: {
          500: '#A855F7',
          600: '#9333EA',
        },
        // Vibrant Orange for warmth
        orange: {
          500: '#F97316',
          600: '#EA580C',
        },
        // Semantic colors
        background: '#FFFFFF',
        surface: '#F8FAFC',
        'text-primary': '#1E293B',
        'text-secondary': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #3B82F6 0%, #9333EA 50%, #F97316 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'gradient-tech': 'linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)',
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'accent': '0 4px 14px 0 rgba(59, 130, 246, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
