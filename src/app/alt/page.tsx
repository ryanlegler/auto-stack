import { css, cva } from "@/../styled-system/css";
import { autoStack } from "@/../styled-system/patterns";
import { styled } from "@/../styled-system/jsx";
import { token } from "@/../styled-system/tokens";
export function AutoStack({ direction, vAlign, hAlign, children, ...rest }: any) {
    // const classNameBase = autoStack({
    //     h: "350px",
    //     display: "flex",
    //     vAlign: vAlign?.base || vAlign,
    //     hAlign: hAlign?.base || hAlign,
    //     direction: direction?.base || direction,
    // });
    // const classNameSm = autoStack({
    //     vAlign: vAlign?.sm,
    //     hAlign: hAlign?.sm,
    //     direction: direction?.sm,
    //     breakpoint: "sm",
    // });
    // const className = classNameBase + " " + classNameSm

    const StyledAutoStack = styled("div");

    const getJustifyContent = ({
        hAlign,
        vAlign,
        direction,
    }: {
        hAlign: any;
        vAlign: any;
        direction: any;
    }) => {
        if (direction === "horizontal") {
            if (hAlign === "center") {
                return "center";
            } else if (hAlign === "left") {
                return "flex-start";
            } else if (hAlign === "right") {
                return "flex-end";
            }
        } else if (direction === "vertical") {
            if (vAlign === "middle") {
                return "center";
            } else if (vAlign === "top") {
                return "flex-start";
            } else if (vAlign === "bottom") {
                return "flex-end";
            }
        }
    };

    const getAlignItems = ({
        hAlign,
        vAlign,
        direction,
    }: {
        hAlign: any;
        vAlign: any;
        direction: any;
    }) => {
        if (direction === "vertical") {
            if (hAlign === "center") {
                return "center";
            } else if (hAlign === "left") {
                return "flex-start";
            } else if (hAlign === "right") {
                return "flex-end";
            }
        } else if (direction === "horizontal") {
            if (vAlign === "middle") {
                return "center";
            } else if (vAlign === "top") {
                return "flex-start";
            } else if (vAlign === "bottom") {
                return "flex-end";
            }
        }
    };

    const resolvedDirection = direction?.base || direction;

    const baseAlign = getAlignItems({
        vAlign: vAlign?.base || vAlign,
        hAlign: hAlign?.base || hAlign,
        direction: resolvedDirection,
    });

    const baseJustifyContent = getJustifyContent({
        hAlign: hAlign?.base || hAlign,
        vAlign: vAlign?.base || vAlign,
        direction: resolvedDirection,
    });

    const getBreakpoint = (breakpoint: string) => {
        // if a breakpoint is not specified, fallback to the previous valid breakpoint
        return {
            flexDirection: direction?.[breakpoint] === "vertical" ? "column" : "row",
            justifyContent: getJustifyContent({
                hAlign: hAlign?.[breakpoint], // needs to fallback here
                vAlign: vAlign?.[breakpoint], // needs to fallback here
                direction: direction?.[breakpoint], // needs to fallback here
            }),
            alignItems: getAlignItems({
                hAlign: hAlign?.[breakpoint], // needs to fallback here
                vAlign: vAlign?.[breakpoint], // needs to fallback here
                direction: direction?.[breakpoint], // needs to fallback here
            }),
        };
    };

    const className = css({
        display: "flex",
        flexDirection: resolvedDirection === "vertical" ? "column" : "row",
        justifyContent: baseJustifyContent,
        alignItems: baseAlign,
        sm: getBreakpoint("sm"),
        md: getBreakpoint("md"),
        lg: getBreakpoint("lg"),
        xl: getBreakpoint("xl"),
    });

    return (
        <StyledAutoStack {...rest} className={className}>
            {children}
        </StyledAutoStack>
    );
}

export default function Pattern() {
    return (
        <div>
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    lg: "top",
                    xl: "bottom",
                }}
                hAlign={{
                    base: "center",
                    sm: "right",
                    md: "center",
                    lg: "right",
                    xl: "left",
                }}
                direction={{
                    base: "vertical",
                    sm: "horizontal",
                    md: "vertical",
                    lg: "horizontal",
                    xl: "vertical",
                }}
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    xl: "purple",
                }}
            >
                {new Array(3).fill("").map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={css({
                                bg: "magenta",
                                p: "3",
                            })}
                        >
                            🚀
                        </div>
                    );
                })}
            </AutoStack>
            {/* <div
                className={flex({
                    direction: {
                        base: "row",
                        md: "column",
                    },
                })}
            >
                {new Array(3).fill("").map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={css({
                                p: "3",
                                lineHeight: "1",
                                overflow: "hidden",
                                borderRadius: "20px",
                            })}
                        >
                            Hello
                        </div>
                    );
                })}
            </div> */}
        </div>
        // <StyledFlex gap="2" direction="vertical" p="10">
        //     {sections.map((section, index) => (
        //         <Section key={index} section={section} CustomElement={StyledFlex} />
        //     ))}
        // </StyledFlex>
    );
}
