import type { Meta, StoryObj } from "@storybook/react";

import { AutoStack } from "./AutoStack";
import { Contents } from "../contents/Contents";
import { sections } from "@/constants/sections";
import { Section } from "../section";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "AutoStack/AutoStack",
    component: AutoStack,
    // parameters: {
    //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    //     direction: "vertical",
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        direction: {
            control: "radio",
            defaultValue: "horizontal",
            options: ["horizontal", "vertical"],
        },
    },
} satisfies Meta<typeof AutoStack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Horizontal: Story = {
    args: {
        direction: "horizontal",
    },
    render: (args) => (
        <AutoStack {...args}>
            <Contents />
        </AutoStack>
    ),
};
export const Vertical: Story = {
    args: {
        direction: "vertical",
    },
    render: (args) => (
        <AutoStack {...args}>
            <Contents />
        </AutoStack>
    ),
};

export const AllVertical: Story = {
    args: {
        direction: "vertical",
    },
    render: (args) => (
        <AutoStack direction="vertical" hAlign="stretch">
            {sections.map((section, index) => (
                <Section key={index} section={section} CustomElement={AutoStack} />
            ))}
        </AutoStack>
    ),
};
