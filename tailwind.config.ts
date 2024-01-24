import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{ts,tsx}",
        "./sections/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background-color)",
                content: "var(--content-color)",
            },
            screens: {
                desktop: "1400px",
                tablet: "768px",
                mobile: "420px",
            },
            maxWidth: {
                desktop: "1200px",
                tablet: "730px",
                mobile: "380px",
            },
        },
    },
    plugins: [],
};
export default config;
