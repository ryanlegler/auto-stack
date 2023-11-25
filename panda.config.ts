import { autoStackPattern } from "@/components/autoStack/pattern";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    jsxFramework: "react",

    // Where to look for your css declarations
    // include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}, "],
    include: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./stories/**/*.{js,jsx,ts,tsx}",
    ],

    // Files to exclude
    exclude: [],

    patterns: {
        extend: {
            autoStack: autoStackPattern,
        },
    },
    staticCss: {
        css: [
            {
                properties: {
                    justifyContent: [
                        "flex-start",
                        "flex-end",
                        "center",
                        "space-between",
                        "space-around",
                        "stretch",
                    ],
                    alignItems: [
                        "flex-start",
                        "flex-end",
                        "center",
                        "space-between",
                        "space-around",
                        "stretch",
                    ],
                    flexDirection: ["row", "column"],
                },
                responsive: true,
            },
        ],
    },

    // Useful for theme customization
    theme: {
        extend: {},
    },

    // The output directory for your css system
    outdir: "styled-system",
});
