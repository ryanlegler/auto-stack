import { css } from "autostack-ui/styled-system/css";
import { ConditionalValue } from "autostack-ui/styled-system/types";

type Item = {
    hAlign?: HorizontalAlignment;
    vAlign?: VerticalAlignment;
    override?: (index: number) => {};
};

export type SectionConfig = {
    items: Item[];
    css: string;
    label: string;
    direction: ConditionalValue<"horizontal" | "vertical">;
};
export type VerticalAlignment =
    | "top"
    | "middle"
    | "bottom"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
export type HorizontalAlignment =
    | "left"
    | "center"
    | "right"
    | "between"
    | "around"
    | "evenly"
    | "stretch";

export const sections: SectionConfig[] = [
    {
        direction: "horizontal",
        label: "Horizontal",
        css: css({
            h: "150px",
            p: "5",
            outline: "1px solid red",
        }),
        items: [
            {
                hAlign: "left",
            },
            {
                hAlign: "center",
            },
            {
                hAlign: "right",
            },
            {
                hAlign: "left",
                vAlign: "stretch",
            },
            {
                hAlign: "center",
                vAlign: "stretch",
            },
            {
                hAlign: "right",
                vAlign: "stretch",
            },
            {
                hAlign: "left",
                vAlign: "top",
            },
            {
                hAlign: "left",
                vAlign: "middle",
            },
            {
                hAlign: "left",
                vAlign: "bottom",
            },
            {
                hAlign: "center",
                vAlign: "top",
            },
            {
                hAlign: "center",
                vAlign: "middle",
            },
            {
                hAlign: "center",
                vAlign: "bottom",
            },
            {
                hAlign: "right",
                vAlign: "top",
            },
            {
                hAlign: "right",
                vAlign: "middle",
            },
            {
                hAlign: "right",
                vAlign: "bottom",
            },
            {
                hAlign: "between",
                vAlign: "top",
            },
            {
                hAlign: "between",
                vAlign: "middle",
            },
            {
                hAlign: "between",
                vAlign: "bottom",
            },
            {
                hAlign: "around",
                vAlign: "top",
            },
            {
                hAlign: "around",
                vAlign: "middle",
            },
            {
                hAlign: "around",
                vAlign: "bottom",
            },
            {
                hAlign: "evenly",
                vAlign: "top",
            },
            {
                hAlign: "evenly",
                vAlign: "middle",
            },
            {
                hAlign: "evenly",
                vAlign: "bottom",
            },
            {
                hAlign: "stretch",
                vAlign: "top",
            },
            {
                hAlign: "stretch",
                vAlign: "middle",
            },
            {
                hAlign: "stretch",
                vAlign: "bottom",
            },
            {
                hAlign: "stretch",
                vAlign: "middle",
                override: (index) => {
                    return index > 0
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
            {
                hAlign: "stretch",
                vAlign: "middle",
                override: (index) => {
                    return index === 0
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
            {
                hAlign: "stretch",
                vAlign: "middle",
                override: (index) => {
                    return index === 1
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
        ],
    },
    {
        direction: "vertical",
        label: "Vertical",
        css: css({
            h: "350px",
            p: "5",
            outline: "1px solid red",
        }),
        items: [
            {
                hAlign: "left",
            },
            {
                hAlign: "center",
            },
            {
                hAlign: "right",
            },

            {
                hAlign: "left",
                vAlign: "stretch",
            },
            {
                hAlign: "center",
                vAlign: "stretch",
            },
            {
                hAlign: "right",
                vAlign: "stretch",
            },

            {
                vAlign: "top",
            },
            {
                vAlign: "middle",
            },
            {
                vAlign: "bottom",
            },

            {
                vAlign: "top",
                hAlign: "left",
            },

            {
                vAlign: "top",
                hAlign: "center",
            },
            {
                vAlign: "top",
                hAlign: "right",
            },

            {
                vAlign: "middle",
                hAlign: "left",
            },
            {
                vAlign: "middle",
                hAlign: "center",
            },
            {
                vAlign: "middle",
                hAlign: "right",
            },
            {
                vAlign: "bottom",
                hAlign: "left",
            },
            {
                vAlign: "bottom",
                hAlign: "center",
            },
            {
                vAlign: "bottom",
                hAlign: "right",
            },

            // distribute
            {
                vAlign: "between",
                hAlign: "left",
            },
            {
                vAlign: "between",
                hAlign: "center",
            },
            {
                vAlign: "between",
                hAlign: "right",
            },
            {
                vAlign: "around",
                hAlign: "left",
            },
            {
                vAlign: "around",
                hAlign: "center",
            },
            {
                vAlign: "around",
                hAlign: "right",
            },
            {
                vAlign: "evenly",
                hAlign: "left",
            },
            {
                vAlign: "evenly",
                hAlign: "center",
            },
            {
                vAlign: "evenly",
                hAlign: "right",
            },

            // distribute stretch
            {
                vAlign: "stretch",
                hAlign: "left",
            },
            {
                vAlign: "stretch",
                hAlign: "center",
            },
            {
                vAlign: "stretch",
                hAlign: "right",
            },
            {
                vAlign: "stretch",
                hAlign: "center",
                override: (index) => {
                    return index === 0
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
            {
                vAlign: "stretch",
                hAlign: "center",
                override: (index) => {
                    return index > 0
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
            {
                vAlign: "stretch",
                hAlign: "center",
                override: (index) => {
                    return index === 1
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },

            {
                vAlign: "between",
                hAlign: "stretch",
            },
            {
                vAlign: "around",
                hAlign: "stretch",
            },
            {
                vAlign: "evenly",
                hAlign: "stretch",
            },

            // // stretch in a horizontal direction
            {
                vAlign: "stretch",
                hAlign: "stretch",
            },
            {
                vAlign: "stretch",
                hAlign: "stretch",
                override: (index) => {
                    return index === 0
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
            {
                vAlign: "stretch",
                hAlign: "stretch",
                override: (index) => {
                    return index > 0
                        ? {
                              flexGrow: "0",
                          }
                        : {};
                },
            },
        ],
    },
];
