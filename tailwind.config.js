/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,css}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#FBBD1C",
                    secondary: "#13C4A3",
                    accent: "#51A800",
                    neutral: "#1B1D1D",
                    "base-100": "#0F1729",
                    "normal-text": "#FFFFFF",
                    "muted-text": "#9CA3AF",
                    "inverse-text": "#000000",
                    info: "#2463EB",
                    success: "#16A249",
                    warning: "#DB7706",
                    error: "#DC2828",
                },
            },
        ],
    }
}
