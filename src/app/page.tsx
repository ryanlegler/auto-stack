import { css } from "autostack-ui/styled-system/css";
import { sections } from "@/constants/sections";
import { Section } from "@/components/section";
import { AutoStack } from "@/components/autoStack";

export default function Pattern() {
    return (
        <AutoStack
            gap="2"
            direction="vertical"
            p="10"
            className={css({
                color: "gray.100",
            })}
        >
            {sections.map((section, index) => (
                <Section key={index} section={section} CustomElement={AutoStack} />
            ))}
        </AutoStack>
    );
}
