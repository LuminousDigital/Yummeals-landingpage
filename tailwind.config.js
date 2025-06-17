module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'yum-orange': '#F25B0A',
        'yum-light-orange': '#FFE8DB',
        'yum-text': '#2A2822',
        'yum-gray': '#5D5A56',
      },
      screens: {
        'mobile375': { 'raw': '(min-width: 425px) and (max-width: 425px) and (max-height: 531px)' }
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
}
