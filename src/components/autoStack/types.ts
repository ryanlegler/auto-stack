import { PropsWithChildren } from "react";
import { ConditionalValue, HTMLStyledProps } from "autostack-ui/styled-system/types";

type Vertical = {
    direction?: ConditionalValue<"vertical">;
    vAlign?: ConditionalValue<
        "top" | "middle" | "bottom" | "between" | "around" | "evenly" | "stretch"
    >;
    hAlign?: ConditionalValue<"left" | "center" | "right" | "stretch" | "baseline">;
};

type Horizontal = {
    direction?: ConditionalValue<"horizontal">;
    vAlign?: ConditionalValue<"top" | "middle" | "bottom" | "stretch" | "baseline">;
    hAlign?: ConditionalValue<
        "left" | "center" | "right" | "between" | "around" | "evenly" | "stretch"
    >;
};
export type AutoStackProps = PropsWithChildren<(Horizontal | Vertical) & HTMLStyledProps<"div">>;
export type AutoStackPropsSlim = Horizontal | Vertical;

// export type AutoStackProps = PropsWithChildren<
//     {
//         direction?: ConditionalValue<"horizontal" | "vertical">;
//         vAlign?: ConditionalValue<
//             "top" | "middle" | "bottom" | "between" | "around" | "evenly" | "stretch"
//         >;
//         hAlign?: ConditionalValue<
//             "left" | "center" | "right" | "between" | "around" | "evenly" | "stretch"
//         >;
//     } & HTMLStyledProps<"div">
// >;

// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
// https://stackoverflow.com/questions/52106717/why-doesnt-justify-content-stretch-work
// should only be allowed to apply  "between" | "around" | "evenly" to the primary axis

// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
// ## JUSTIFY CONTENT
// space-between
// space-around
// space-evenly

// https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
// ## ALIGN ITEMS
// stretch
// baseline

// BOTH
// flex-start
// center
// flex-end

export type Direction = Extract<AutoStackProps["direction"], string>;
export type VAlign = Extract<AutoStackProps["vAlign"], string>;
export type HAlign = Extract<AutoStackProps["hAlign"], string>;

export type ResolvedProps = {
    direction: Direction;
    vAlign: VAlign;
    hAlign: HAlign;
};
