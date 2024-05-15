/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite/**/*.{html,js,svelte,ts}',
    ],
    plugins: [require('flowbite/plugin')],
    theme: {
        extend: {
            colors: {
                blue: {
                    500: '#00adee',
                    600: '#00adee',
                    700: '#00adee',
                },
                gray: {
                    700: '#222c56',
                    900: '#222c56',
                },
                primary: {
                    100: '#222c56',

                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',

                    600: '#ffffff',
                    700: '#00adee',
                    800: '#009dd9',

                    900: '#1e3a8a',
                },
            },
        },
    },
    darkMode: 'false',
}
