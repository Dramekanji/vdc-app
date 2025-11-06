/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vdc: {
          green: {
            DEFAULT: '#1EAB07',
            light: '#22C408',
            dark: '#178A05',
            50: '#E8F9E5',
            100: '#C5F1BC',
            500: '#1EAB07',
            600: '#178A05',
            700: '#126804',
          },
          orange: {
            DEFAULT: '#F39419',
            light: '#F5A73F',
            dark: '#D17F0E',
            50: '#FEF4E8',
            100: '#FCE4C2',
            500: '#F39419',
            600: '#D17F0E',
            700: '#A8650B',
          },
          gray: {
            50: '#F7F7F8',
            100: '#EFEFEF',
            200: '#E5E5E5',
            300: '#CBCBCB',
            400: '#A8A8A8',
            500: '#7E7E7E',
            600: '#5A5A5A',
            700: '#414547',
            800: '#2D2D2D',
            900: '#1A1A1A',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-vdc': 'linear-gradient(135deg, #1EAB07 0%, #22C408 100%)',
        'gradient-vdc-orange': 'linear-gradient(135deg, #F39419 0%, #F5A73F 100%)',
        'gradient-vdc-mixed': 'linear-gradient(135deg, #1EAB07 0%, #F39419 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
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
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'vdc': '0 4px 20px rgba(30, 171, 7, 0.15)',
        'vdc-orange': '0 4px 20px rgba(243, 148, 25, 0.15)',
        'vdc-lg': '0 10px 40px rgba(30, 171, 7, 0.2)',
      },
    },
  },
  plugins: [],
}
