module.exports = {
  purge: [
    './assets/style.css',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './services/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      mobile: '500px',
      tablet: '768px',
      desktop: '1100px',
      xl: '1280px',
      huge: '1920px',
    },
    fontFamily: {
      prompt: ['Prompt'],
      sans: ['WorkSans'],
    },
    fontSize: {
      '2xs': ['.50rem'],
      xs: ['.75rem'],
      sm: ['.875rem'],
      tiny: ['.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '5xl': ['3rem'],
      '6xl': ['4rem'],
      '7xl': ['5rem'],
      '8xl': ['6rem'],
      '9xl': ['7rem'],
    },
    extend: {
      animation: {
        push: 'push 0.3s linear 1',
        float: 'float 9s infinite',
      },
      backgroundImage: {
        'dithered-alt': "url('/svgs/dither-gradient-alt.svg')",
        'dithered-secondary': "url('/svgs/dither-gradient-secondary.svg')",
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        primary: '#1F1C47',
        secondary: '#12C7BA',
        alt: '#DBF7F5',
        hyper: '#E5FF85',
        blush: '#FF7A87',
        blue: '#3F4BF5',
        purple: '#654192',
        green: '#85AFAA',
      },
      display: ['huge', 'desktop', 'tablet', 'mobile'],
      backgroundOpacity: {
        10: '0.1',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(33.3334%)',
            animationTimingFunction: 'linear',
          },
          '25%, 75%': {
            transform: 'translateY(16.6667%)',
            animationTimingFunction: 'linear',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'linear',
          },
        },
        push: {
          '50%': { transform: 'scale(0.8)' },
        },
      },
      scale: {
        '-1': '-1',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      borderWidth: ['last'],
      brightness: ['hover'],
      fontWeight: ['last'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
