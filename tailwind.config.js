/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: "#0F172A",
                accent: "#38BDF8",
            }
        },
    },
    plugins: [],
}
