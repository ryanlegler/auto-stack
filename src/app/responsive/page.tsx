import { AutoStack } from "@/components/autoStack";
import { Contents } from "@/components/contents/Contents";

export default function Responsive() {
    const BG = {
        base: "#bada55",
        sm: "violet",
        md: "blue",
        lg: "orange",
        xl: "purple",
    };
    return (
        <AutoStack gap="5" hAlign="stretch" direction="vertical">
            <AutoStack
                gap="3"
                h="350px"
                vAlign={{
                    // base: "top",
                    sm: "middle",
                    md: "bottom",
                    // lg: "top",
                }}
                hAlign={{
                    // base: "left",
                    sm: "left",
                    md: "right",
                    // lg: "stretch",
                }}
                direction="horizontal"
                bg={BG}
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
                bg={BG}
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
                bg={BG}
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
                bg={BG}
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
                bg={BG}
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
                bg={BG}
            >
                <Contents flexIndex={0} />
            </AutoStack>
        </AutoStack>
    );
}
