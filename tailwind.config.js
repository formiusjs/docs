tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif']
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.9 },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        fadeUpDown: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '15%': { opacity: 1, transform: 'translateY(0)' },
          '85%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-16px)' },
        }
      },
      animation: {
        'gradient-flow': 'gradientFlow 3s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        typing: 'typing 3s steps(30, end), blink 0.8s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        glow: 'pulseGlow 3s ease-in-out infinite',
        fadeUpDown: 'fadeUpDown 7s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
    },
  },
}