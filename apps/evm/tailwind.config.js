import sharedConfig from '@sushiswap/tailwindcss-config'
import colors from 'tailwindcss/colors'

// @ts-check
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'class',
  presets: [sharedConfig],
  theme: {
    // screens: {
    //   vs: '425px',
    //   sm: '576px',
    //   md: '768px',
    //   lg: '992px',
    //   xl: '1200px',
    //   xxl: '1440px',
    // },
    colors: {
      primary: '#8ef102',
      default: 'rgb(var(--default) / 1)',
      hover: 'rgb(var(--primary_hover) / 1)',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate,
      neutral: {
        50: '#fcfdfc',
        100: '#fafbf9',
        200: '#e8ece4',
        300: '#d3ddd0',
        400: '#9f9f9f',
        500: '#212121',
        600: '#445434',
        700: '#404040',
        800: '#272727',
        900: '#212121',
      },
    },
    extend: {
      fontFamily: {
        display: 'Metuo, sans-serif',
      },
      display: ['group-hover'],
      visibility: ['group-hover'],
      keyframes: {
        dash: {
          to: {
            'stroke-dashoffset': '0',
          },
        },
      },
    },
  },
}

export default tailwindConfig
