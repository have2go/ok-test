import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "Main/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TestBtn: Story = {
    args: {
        variant: "primary",
        size: 56,
        state: "enabled",
        counter: true,
        text: "Что сделать",
    },
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: "radio",
        },
        size: {
            options: [28, 36, 56],
            control: "radio",
        },
        state: {
            options: ["enabled", "loading", "disabled"],
            control: "radio",
        },
        text: {
            control: "text",
        },
    },
};
