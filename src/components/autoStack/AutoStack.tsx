import React, { useMemo } from "react";
import { css } from "autostack-ui/styled-system/css";
import { styled } from "autostack-ui/styled-system/jsx";
import { AutoStackProps, AutoStackPropsSlim } from "./types";
import { useAutoStack } from "./useAutoStack";

export function AutoStack({
    direction,
    vAlign,
    hAlign,
    children,
    className: passedClassNames,
    ...rest
}: AutoStackProps) {
    const StyledAutoStack = styled("div");

    // this generates the flexJustify stretch static css of all the breakpoints
    // there's likely a better way to do this. so far haven't found an alternate way to get these statically extracted
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
    } as AutoStackPropsSlim);
    return (
        <StyledAutoStack
            {...rest}
            className={`${className}${passedClassNames ? ` ${passedClassNames}` : ""}`}
        >
            {children}
        </StyledAutoStack>
    );
}
