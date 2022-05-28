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
        'landing-theme': {
          background: '#292833',
          nightgrey: '#292833',
        },
        background: 'var(--background)',
        nightgrey: 'var(--nightgrey)',
      },
      backgroundImage: {
        'spl-gov': "url('/backgrounds/spl-gov.png')",
        'daotype-multisig': "url('/backgrounds/daotype-multisig.png')",
        'daotype-nft-community':
          "url('/backgrounds/daotype-nft-community.png')",
        'daotype-tokenized': "url('/backgrounds/daotype-tokenized.png')",
        'managing-dao': "url('/backgrounds/managing-dao.png')",
      },
      animation: {
        'connect-wallet-ping':
          'connect-wallet-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        gradient: 'gradient 4s ease-in-out infinite',
        loader: 'loader 0.6s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        gradient: {
          '0%': {
            'background-position': '15% 0%',
          },
          '50%': {
            'background-position': '85% 100%',
          },
          '100%': {
            'background-position': '15% 0%',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
