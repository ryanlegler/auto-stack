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
                        "space-evenly",
                    ],
                    alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
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
    emitPackage: true,
    outdir: "autostack-ui/styled-system",
});
