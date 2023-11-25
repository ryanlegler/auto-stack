// (property) PatternConfig<PatternProperties>.transform?: ((props: Props<PatternProperties>, helpers: PatternHelpers) => SystemStyleObject) | undefined

import { PatternConfig } from "@pandacss/dev";

export const autoStackPattern: PatternConfig = {
    description: "A better flexbox system",
    jsxName: "AutoStack",

    // blocklist: ["direction"],
    properties: {
        breakpoint: { type: "enum", value: ["sm", "md"] },
        direction: { type: "enum", value: ["horizontal", "vertical"] },
        vAlign: {
            type: "enum",
            value: ["top", "middle", "bottom", "between", "around", "evenly", "stretch"],
        },
        hAlign: {
            type: "enum",
            value: ["left", "center", "right", "between", "around", "evenly", "stretch"],
        },
    },
    transform(props) {
        const { direction, vAlign, hAlign, breakpoint, ...rest } = props;

        const alignItemsVertical = (hAlign: any) => {
            if (hAlign === "left") {
                return "flex-start";
            } else if (hAlign === "center") {
                return "center";
            } else if (hAlign === "right") {
                return "flex-end";
            }
        };
        const alignItemsHorizontal = (vAlign: string) => {
            if (vAlign === "top") {
                return "flex-start";
            } else if (vAlign === "middle") {
                return "center";
            } else if (vAlign === "bottom") {
                return "flex-end";
            }
        };

        const alignItemsFn = (direction: string) =>
            direction === "vertical" ? alignItemsVertical(hAlign) : alignItemsHorizontal(vAlign);

        const justifyContentVertical = (vAlign: string) => {
            if (vAlign === "top") {
                return "flex-start";
            } else if (vAlign === "middle") {
                return "center";
            } else if (vAlign === "bottom") {
                return "flex-end";
            }
        };
        const justifyContentHorizontal = (hAlign: string) => {
            if (hAlign === "left") {
                return "flex-start";
            } else if (hAlign === "center") {
                return "center";
            } else if (hAlign === "right") {
                return "flex-end";
            }
        };

        const justifyContentFn = (direction: string) =>
            direction === "vertical"
                ? justifyContentVertical(vAlign)
                : justifyContentHorizontal(hAlign);

        const flexDirectionFn = (direction: string) =>
            direction === "vertical" ? "column" : "row";

        // return {
        //     base: {
        //         flexDirection: flexDirectionFn(direction?.base || direction),
        //         justifyContent: justifyContentFn(direction?.base || direction),
        //         alignItems: alignItemsFn(direction?.base || direction),
        //     },
        //     sm: {
        //         flexDirection: direction?.sm || direction === "vertical" ? "column" : "row",
        //         justifyContent: justifyContentFn(direction?.sm || direction),
        //         alignItems: alignItemsFn(direction?.sm || direction),
        //     },
        //     md: {
        //         flexDirection: flexDirectionFn(direction),
        //         justifyContent: justifyContentFn(direction),
        //         alignItems: alignItemsFn(direction),
        //     },
        //     lg: {
        //         flexDirection: flexDirectionFn(direction),
        //         justifyContent: justifyContentFn(direction),
        //         alignItems: alignItemsFn(direction),
        //     },
        //     ...rest,
        // };

        return breakpoint
            ? {
                  [breakpoint]: {
                      flexDirection: flexDirectionFn(direction),
                      justifyContent: justifyContentFn(direction),
                      alignItems: alignItemsFn(direction),
                      ...rest,
                  },
              }
            : {
                  flexDirection: flexDirectionFn(direction),
                  justifyContent: justifyContentFn(direction),
                  alignItems: alignItemsFn(direction),
                  ...rest,
              };
    },
};
