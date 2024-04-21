/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                dancing: ["Dancing Script", "sans-serif"],
            },
            animation: {
                fade: "fadeIn .5s ease-in-out",
            },

            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
