/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gowun: ["Gowun Batang"],
        dodum: ["Gowun Dodum"],
        nanum: ["NanumBarunGothic"],
        nanum_bold: ["NanumBarunGothic-bold"],
        serif_kr: ["NotoSerifKR"],
        display: ["Playfair Display"],
        cute: ["GangwonEdu_OTFBoldA"],
        baskerville: ["Libre Baskerville", "serif"],
      },
      colors: {
        beige: {
          50: '#FDF8F3',
          100: '#F9EFE3',
          200: '#F3DFC7',
          300: '#E8C89A',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E8EFE8',
          200: '#C8D9C8',
          300: '#A3BFA3',
        },
        blush: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFCECE',
        },
        baby: {
          blue: '#B8D4E3',
          sky: '#E8F4FD',
          mint: '#D4EDE8',
          cream: '#FFF8E7',
          peach: '#FFE8D6',
        }
      }
    },
  },
  plugins: [],
}
