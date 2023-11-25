import { PropsWithChildren, useMemo } from "react";
import { css } from "@/../styled-system/css";
import { AutoStackProperties } from "@/../styled-system/patterns";
import { styled } from "@/../styled-system/jsx";
import { HTMLStyledProps } from "@/../styled-system/types";

const BREAKPOINTS = ["base", "sm", "md", "lg", "xl", "2xl"] as const;

export type AutoStackProps = PropsWithChildren<AutoStackProperties & HTMLStyledProps<"div">>;

type Direction = Extract<AutoStackProperties["direction"], string>;
type VAlign = Extract<AutoStackProperties["vAlign"], string>;
type HAlign = Extract<AutoStackProperties["hAlign"], string>;

type ResolvedProps = {
    direction: Direction;
    vAlign: VAlign;
    hAlign: HAlign;
};

export function AutoStack({
    direction = "horizontal",
    vAlign = "top",
    hAlign = "left",
    children,
    className: passedClassNames,
    ...rest
}: AutoStackProps) {
    function getUsedBreakpoints({ hAlign, vAlign, direction }: AutoStackProperties) {
        const usedBreakpoints = new Set<string>();
        if (typeof direction === "object") {
            Object.keys(direction).forEach((key) => usedBreakpoints.add(key));
        }

        if (typeof vAlign === "object") {
            Object.keys(vAlign).forEach((key) => usedBreakpoints.add(key));
        }

        if (typeof hAlign === "object") {
            Object.keys(hAlign).forEach((key) => usedBreakpoints.add(key));
        }
        return Array.from(usedBreakpoints) as (typeof BREAKPOINTS)[number][];
    }

    const resolvedBreakpointValues: (typeof BREAKPOINTS)[number][] = getUsedBreakpoints({
        hAlign,
        vAlign,
        direction,
    });

    const StyledAutoStack = styled("div");

    // this is a nasty hack - do I actually need this - i seem to
    useMemo(
        () => (
            <>
                <AutoStack
                    className={css({
                        "& > *:not(.grow_0)": {
                            display: "flex",
                            flex: "1 0 auto",
                        },
                    })}
                >
                    🚀
                </AutoStack>
            </>
        ),
        []
    );

    const getJustifyContent = ({ hAlign, vAlign, direction }: ResolvedProps) => {
        const JUSTIFY_MAP: any = {
            horizontal: {
                left: "flex-start",
                center: "center",
                right: "flex-end",

                // don't do anything
                around: "space-around",
                evenly: "space-evenly",
                between: "space-between",
                stretch: "stretch",
            },
            vertical: {
                top: "flex-start",
                middle: "center",
                bottom: "flex-end",

                // don't do anything
                around: "space-around",
                evenly: "space-evenly",
                between: "space-between",
                stretch: "stretch",
            },
        };
        const resolvedAlign = direction === "vertical" ? vAlign : hAlign;
        return JUSTIFY_MAP[direction][resolvedAlign];
    };

    const getAlignItems = ({ hAlign, vAlign, direction }: ResolvedProps) => {
        const ALIGN_MAP: any = {
            horizontal: {
                top: "flex-start",
                middle: "center",
                bottom: "flex-end",

                // don't do anything
                around: "space-around",
                evenly: "space-evenly",
                between: "space-between",
                stretch: "stretch",
            },
            vertical: {
                left: "flex-start",
                center: "center",
                right: "flex-end",

                // don't do anything
                around: "space-around",
                evenly: "space-evenly",
                between: "space-between",
                stretch: "stretch",
            },
        };

        const resolvedAlign = direction === "vertical" ? hAlign : vAlign;
        return ALIGN_MAP[direction][resolvedAlign];
    };

    const resolvedDirection: Direction = (direction as any)?.base || direction;
    const resolvedVAlign: VAlign = (vAlign as any)?.base || vAlign;
    const resolvedHAlign: HAlign = (hAlign as any)?.base || hAlign;

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
    const findBreakpointValue = (breakpoint: (typeof BREAKPOINTS)[number], property: any) => {
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
            return {};
        }
    };

    const getBreakpoint = (breakpoint: (typeof BREAKPOINTS)[number]) => {
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

    // only
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

    return (
        <StyledAutoStack {...rest} className={`${className} ${passedClassNames}`}>
            {children}
        </StyledAutoStack>
    );
}
