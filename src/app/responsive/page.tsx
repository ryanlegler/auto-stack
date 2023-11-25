import { AutoStack } from "@/components/autoStack";
import { Contents } from "@/components/contents/Contents";

export default function Pattern() {
    // return <></>;
    return (
        <AutoStack
            gap="5"
            hAlign="stretch"
            direction="vertical"
            // className={css({
            //     "& > *:not(.grow_0)": {
            //         display: "flex",
            //         flex: "1 0 auto",
            //     },
            // })}
        >
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    // lg: "top",
                }}
                hAlign={{
                    base: "left",
                    sm: "center",
                    md: "right",
                    // lg: "stretch",
                }}
                direction="horizontal"
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    // xl: "purple",
                }}
            >
                <Contents />
            </AutoStack>
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    // lg: "stretch",
                }}
                hAlign={{
                    base: "left",
                    sm: "center",
                    md: "right",
                    // lg: "stretch",
                }}
                direction="vertical"
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    // xl: "purple",
                }}
            >
                <Contents />
            </AutoStack>

            {/* // with stretch / no grow0 */}
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    lg: "stretch",
                }}
                hAlign={{
                    base: "left",
                    sm: "center",
                    md: "right",
                    lg: "stretch",
                }}
                direction="horizontal"
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    // xl: "purple",
                }}
            >
                <Contents />
            </AutoStack>
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    lg: "stretch",
                }}
                hAlign={{
                    base: "left",
                    sm: "center",
                    md: "right",
                    lg: "stretch",
                }}
                direction="vertical"
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    // xl: "purple",
                }}
            >
                <Contents />
            </AutoStack>

            {/* //  no grow0 */}
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    // lg: "stretch",
                }}
                hAlign={{
                    base: "left",
                    sm: "center",
                    md: "right",
                    // lg: "stretch",
                }}
                direction="horizontal"
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    // xl: "purple",
                }}
            >
                <Contents flexIndex={0} />
            </AutoStack>
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    base: "top",
                    sm: "middle",
                    md: "bottom",
                    // lg: "stretch",
                }}
                hAlign={{
                    base: "left",
                    sm: "center",
                    md: "right",
                    // lg: "stretch",
                }}
                direction="vertical"
                bg={{
                    base: "red",
                    sm: "green",
                    md: "blue",
                    lg: "orange",
                    // xl: "purple",
                }}
            >
                <Contents flexIndex={0} />
            </AutoStack>
        </AutoStack>
    );
}
