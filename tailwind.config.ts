import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      background: {
        light_grey: "#F6F5F4",
      },
      colors: {
        text_dark_1: "rgb(5, 5, 5)",
        text_grey_1: "rgba(0,0,0,.6)",

        text_blue_1: "#0a85d1",
        text_dark_2: "rgb(18, 18, 18)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
