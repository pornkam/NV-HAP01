/** @type {import('tailwindcss').Config} */
export default {
  // กำหนดให้ Tailwind ตรวจสอบการใช้คลาสในไฟล์เหล่านี้
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}