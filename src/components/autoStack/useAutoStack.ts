import React, { useMemo } from "react";
import { css } from "autostack-ui/styled-system/css";
import { BREAKPOINT_VALUES } from "./constants";
import { AutoStackPropsSlim, Direction, HAlign, ResolvedProps, VAlign } from "./types";
import { getUsedBreakpoints } from "./utils/getUsedBreakpoints";

export function useAutoStack({ hAlign, vAlign, direction }: AutoStackPropsSlim) {
    return useMemo(() => {
        const resolvedBreakpointValues: (typeof BREAKPOINT_VALUES)[number][] = getUsedBreakpoints({
            hAlign,
            vAlign,
            direction,
        } as AutoStackPropsSlim);

        const getJustifyContent = ({ hAlign, vAlign, direction }: ResolvedProps) => {
            // TODO - fix typing here
            const JUSTIFY_MAP: any = {
                horizontal: {
                    left: "flex-start",
                    center: "center",
                    right: "flex-end",
                    around: "space-around",
                    evenly: "space-evenly",
                    between: "space-between",
                },
                vertical: {
                    top: "flex-start",
                    middle: "center",
                    bottom: "flex-end",
                    around: "space-around",
                    evenly: "space-evenly",
                    between: "space-between",
                },
            };
            const resolvedAlign = direction === "vertical" ? vAlign : hAlign;
            return JUSTIFY_MAP?.[direction]?.[resolvedAlign];
        };

        const getAlignItems = ({ hAlign, vAlign, direction }: ResolvedProps) => {
            const ALIGN_MAP: any = {
                horizontal: {
                    top: "flex-start",
                    middle: "center",
                    bottom: "flex-end",
                    // stretch: "stretch",
                },
                vertical: {
                    left: "flex-start",
                    center: "center",
                    right: "flex-end",
                    // stretch: "stretch",
                },
            };

            const resolvedAlign = direction === "vertical" ? hAlign : vAlign;
            return ALIGN_MAP[direction][resolvedAlign];
        };

        const resolvedDirection: Direction = (direction as any)?.base || direction;

        // the fallback to top left here is for where a responsive object IS defined but it doesn't have a base key...
        const resolvedVAlign: VAlign =
            (vAlign as any)?.base || (typeof vAlign === "string" ? vAlign : "top");
        const resolvedHAlign: HAlign =
            (hAlign as any)?.base || (typeof hAlign === "string" ? hAlign : "left");

        const baseAlign = getAlignItems({
            vAlign: resolvedVAlign,
            hAlign: resolvedHAlign,
            direction: resolvedDirection,
        });

        const baseJustifyContent = getJustifyContent({
            hAlign: resolvedHAlign,
            vAlign: resolvedVAlign,
            direction: resolvedDirection,
        });

        // fix typing here
        const findBreakpointValue = (
            breakpoint: (typeof BREAKPOINT_VALUES)[number],
            property: any
        ) => {
            const startIndex = resolvedBreakpointValues.indexOf(breakpoint);
            for (let i = startIndex; i >= 0; i--) {
                const value = (property as any)?.[resolvedBreakpointValues[i]];
                if (value) {
                    return value;
                }
            }
        };

        const getStretch = ({ hAlign, vAlign, direction }: ResolvedProps) => {
            if (direction === "vertical" && vAlign === "stretch") {
                return {
                    "& > *:not(.grow_0)": {
                        display: "flex",
                        flex: "1 0 auto",
                    },
                };
            } else if (direction === "horizontal" && hAlign === "stretch") {
                return {
                    "& > *:not(.grow_0)": {
                        display: "flex",
                        flex: "1 0 auto",
                    },
                };
            } else {
            }
        };

        const getBreakpoint = (breakpoint: (typeof BREAKPOINT_VALUES)[number]) => {
            const resolvedDirection: Direction =
                findBreakpointValue(breakpoint, direction) || direction;
            const resolvedVAlign: VAlign = findBreakpointValue(breakpoint, vAlign) || vAlign;
            const resolvedHAlign: HAlign = findBreakpointValue(breakpoint, hAlign) || hAlign;

            return {
                flexDirection: resolvedDirection === "vertical" ? "column" : "row",
                justifyContent: getJustifyContent({
                    hAlign: resolvedHAlign,
                    vAlign: resolvedVAlign,
                    direction: resolvedDirection,
                }),
                alignItems: getAlignItems({
                    hAlign: resolvedHAlign,
                    vAlign: resolvedVAlign,
                    direction: resolvedDirection,
                }),
                ...getStretch({
                    direction: resolvedDirection,
                    vAlign: resolvedVAlign,
                    hAlign: resolvedHAlign,
                }),
            };
        };

        const breakpoints = resolvedBreakpointValues.reduce(
            (prev, curr) => ({ ...prev, [curr]: getBreakpoint(curr) }),
            {}
        );

        const className = css({
            display: "flex",
            flexDirection: resolvedDirection === "vertical" ? "column" : "row",
            justifyContent: baseJustifyContent,
            alignItems: baseAlign,

            ...getStretch({
                direction: resolvedDirection,
                vAlign: resolvedVAlign,
                hAlign: resolvedHAlign,
            }),
            ...breakpoints,
        });

        return className;
    }, [hAlign, vAlign, direction]);
}
