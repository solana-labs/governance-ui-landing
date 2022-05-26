// function withOpacityValue(variable) {
//   return ({ opacityValue }) => {
//     if (opacityValue === undefined) {
//       return `rgb(var(${variable}))`;
//     }
//     return `rgb(var(${variable}) / ${opacityValue})`;
//   };
// }

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // primary: ['Inter', ...fontFamily.sans],
        serif: [
          'p22-mackinac-pro',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        sans: [
          'Ambit',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        display: ['PT Mono', 'monospace'],
        primary: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          // 50: withOpacityValue('--tw-color-primary-50'),
          // 100: withOpacityValue('--tw-color-primary-100'),
          // 200: withOpacityValue('--tw-color-primary-200'),
          // 300: withOpacityValue('--tw-color-primary-300'),
          // 400: withOpacityValue('--tw-color-primary-400'),
          // 500: withOpacityValue('--tw-color-primary-500'),
          // 600: withOpacityValue('--tw-color-primary-600'),
          // 700: withOpacityValue('--tw-color-primary-700'),
          // 800: withOpacityValue('--tw-color-primary-800'),
          // 900: withOpacityValue('--tw-color-primary-900'),
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus', 'disabled'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      borderWidth: ['last'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
