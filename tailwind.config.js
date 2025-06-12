/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bold-blue": "#000647",
        "light-blue": "#daeefe",
        "primary-yellow": "#FFC60C",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.75',
            fontSize: '1.125rem',
            h1: {
              color: '#000647',
              fontWeight: '700',
            },
            h2: {
              color: '#000647',
              fontWeight: '700',
            },
            h3: {
              color: '#000647',
              fontWeight: '600',
            },
            a: {
              color: '#FFC60C',
              textDecoration: 'underline',
              '&:hover': {
                color: '#e6b800',
              },
            },
            strong: {
              color: '#000647',
              fontWeight: '700',
            },
            blockquote: {
              borderLeftColor: '#FFC60C',
              backgroundColor: '#daeefe',
              padding: '1rem 1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
