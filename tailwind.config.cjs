/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Base\\ Neue\\ Wide"],
        content: ["Base\\ Neue\\ Light"],
      },
      colors: {
        black: "#171413",
        white: "#FFFFFF",
      },
      keyframes: {
        linkReveal: {
          "0%": { opacity: 0, transform: "translateY(-4rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        plusCW: {
          "0%": { opacity: 0, transform: "rotate(-180deg)" },
          "80%": { opacity: 1 },
          "100%": { transform: "rotate(0deg)" },
        },
        plusCCW: {
          "0%": { opacity: 0, transform: "rotate(180deg)" },
          "80%": { opacity: 1 },
          "100%": { transform: "rotate(0deg)" },
        },
        borders: {
          "0%": { clipPath: "inset(0px 50% 0px 50%)" },
          "100%": { clipPath: "inset(0px 0px 0px 0px)" },
        },
      },
      animation: {
        linkReveal: "linkReveal 1s cubic-bezier(.45,0,0,.99)",
        borders: "borders 1s cubic-bezier(.45,0,0,.99)",
        plusCW: "plusCW 1s cubic-bezier(.45,0,0,.99)",
        plusCCW: "plusCCW 1s cubic-bezier(.45,0,0,.99)",
      },
    },
  },
  plugins: [],
};
