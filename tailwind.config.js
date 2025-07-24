/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                glow: "glow 3s ease-in-out infinite",
            },
            keyframes: {
                glow: {
                    "0%, 100%": {boxShadow: "0 0 8px #4ade80"},
                    "50%": {boxShadow: "0 0 18px #4ade80"},
                },
            },
        },
    },
    plugins: [],
}
