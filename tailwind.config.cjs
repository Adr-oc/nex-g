const defaultTheme = require("tailwindcss/defaultTheme"); 

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        museo: ["MuseoModerno", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          '50': '#eefffa',
          '100': '#c5fff2',
          '200': '#8bffe6',
          '300': '#4afed8',
          '400': '#15ecc5',
          '500': '#00d0ae',
          '600': '#00a88f',
          '700': '#008170',
          '800': '#06695e',
          '900': '#0a574d',
          '950': '#003531',
        },
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};