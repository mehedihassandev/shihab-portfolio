/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./portfolio.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#0DB760",
                case_study: "#FAFAFA",
                text_color: "#323232",
            },
        },
    },
    plugins: [],
};
