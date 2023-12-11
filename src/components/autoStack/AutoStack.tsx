import React, { useMemo } from "react";
import { css } from "autostack-ui/styled-system/css";
import { styled } from "autostack-ui/styled-system/jsx";
import { AutoStackProps } from "./types";
import { useAutoStack } from "./useAutoStack";

export function AutoStack({
    direction = "horizontal",
    vAlign = "top",
    hAlign = "left",
    children,
    className: passedClassNames,
    ...rest
}: AutoStackProps) {
    const StyledAutoStack = styled("div");

    // this is a nasty hack - I need this to get the static extraction to work on this
    //   .\[\&_\>_\*\:not\(\.grow_0\)\]\:d_flex > *:not(.grow_0) {
    //     display: flex
    //         }

    //   .\[\&_\>_\*\:not\(\.grow_0\)\]\:flex_1_0_auto > *:not(.grow_0) {
    //     flex: 1 0 auto
    //         }

    // this now generates the flexJustify stretch static css of all the breakpoints
    useMemo(
        () => (
            <>
                <AutoStack
                    className={css({
                        base: {
                            "& > *:not(.grow_0)": {
                                display: "flex",
                                flex: "1 0 auto",
                            },
                        },
                        sm: {
                            "& > *:not(.grow_0)": {
                                display: "flex",
                                flex: "1 0 auto",
                            },
                        },
                        md: {
                            "& > *:not(.grow_0)": {
                                display: "flex",
                                flex: "1 0 auto",
                            },
                        },
                        lg: {
                            "& > *:not(.grow_0)": {
                                display: "flex",
                                flex: "1 0 auto",
                            },
                        },
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

    const className = useAutoStack({
        direction,
        vAlign,
        hAlign,
    });

    return (
        <StyledAutoStack {...rest} className={`${className} ${passedClassNames}`}>
            {children}
        </StyledAutoStack>
    );
}
