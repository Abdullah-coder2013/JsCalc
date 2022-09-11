/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,css,html}"],
    theme: {
        extend: {
            backgroundImage: {
                "colorFulBackground": "url(background.png)"
            }
        },
    },
    plugins: [],
}
