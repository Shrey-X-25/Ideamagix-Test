/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      fontSize: {
        xxxs: "0.625rem",
        xxs: "0.75rem",
        xs: "0.8125rem",
        sm: "0.875rem",
        "semi-base": "0.9375rem",
        base: "1rem",
        "semi-lg": "1.0625rem",
        lg: "1.125rem",
        "semi-xl": "1.1875rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.625rem",
        "4xl": "1.9375rem",
        "5xl": "3rem",
      },

      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": '#1871CA',
        "twitter-blue-disabled": "#1E5D87",

        /**
         * For modal background
         * * Use with 20% opacity */
        "blue-wash": "#75BEEF",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        success: "#00BE74",
        error: "#8B141A",

        "desk-dark": "#040404",

        neutral: {
          50: "#F9F9F9",
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#D3D3D3",
          400: "#A2A2A2",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
          1000: "#000000",
        },
      },

      spacing: {
        "50%-": "-50%",
        "2.5-": "-.625rem",
        4.5: "1.125rem",
        17: "4.25rem",
        17.25: "4.375rem",
        55: "13.75rem",
        84: "21rem",
        87: "21.75rem",
        88: "22rem",
        106: "26.5rem",
        110: "27.5rem",
        120: "30rem",
        128: "32rem",
        150: "37.5rem",
      },

      width: {
        // Naming things is hard...
        17.5: "71px",
        18: "74px",
        22: "84px",
        22.5: "85px",
        88.5: "360px",

        "sm": "222px",
        "almost-sm": "334px",
        "almost-sm-2": "348px",
        "almost-md": "426px",
        "almost-md-2": "434px",
        "almost-md-3": "442px",
        "lg": "512px",
        "post-xl": "598px",
      },

      height: {
        13: "50px",
        14.5: "58px",
        26: "102px",
        36.5: "150px",
        88.5: "355px",
        50: "200px",
      },

      borderRadius: {
        "2.5xl": "20px",
        "3.5xl": "30px",
        "4xl": "65px",
      },

      screens: {
        tab: "820px",
        mobile: "480px",
      },

      lineHeight: {
        // Naming things is very hard...
        regular: "normal",
      },

      padding: {
        21: "84px",
        22: "93px",
        3.75: "15px",
      },

      gap: {
        2.5: "0.625rem",
        3.5: "15px",
      },

      boxShadow: {
        'neutral': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};