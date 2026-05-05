/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./components/confirmation/**/*.{js,ts,jsx,tsx}",
        "./components/footer/**/*.{js,ts,jsx,tsx}",
        "./components/languages/**/*.{js,ts,jsx,tsx}",
        "./components/payment/**/*.{js,ts,jsx,tsx}",
        "./user/**/*.{js,ts,jsx,tsx}",
        "./user/rooms/**/*.{js,ts,jsx,tsx}",
        "./auth/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};