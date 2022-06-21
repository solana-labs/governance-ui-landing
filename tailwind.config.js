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
        primary: ['sans-serif'],
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
        'spl-gov': "url('/assets/backgrounds/spl-gov.png')",
        'daotype-multisig': "url('/assets/backgrounds/daotype-multisig.png')",
        'daotype-nft-community':
          "url('/assets/backgrounds/daotype-nft-community.png')",
        'daotype-tokenized': "url('/assets/backgrounds/daotype-tokenized.png')",
        'managing-dao': "url('/assets/backgrounds/managing-dao.png')",
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
      screens: {
        md: '834px',
        '1_5xl': '1312px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
