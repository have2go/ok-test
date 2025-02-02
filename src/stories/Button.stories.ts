import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "Main/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            description: "Цветовая схема компонента",
            defaultValue: { summary: "primary" },
            options: ["primary", "secondary"],
            control: "radio",
        },
        size: {
            description:
                "Размер\n\nОтвечает за исходный размер кнопки и значения, которые идут в комбинации с этим размером",
            defaultValue: { summary: 56 },
            options: [28, 36, 56],
            control: "radio",
        },
        state: {
            description:
                "Состояние кнопки\n\nenabled - Обычное состояние кнопки. Её можно нажать\n\nloading - Состояние кнопки, когда пользователь нажал на неё, но запрос ещё не обработан.\n\ndisabled - Состояние кнопки, когда она выключена и недоступна для нажатия.",
            defaultValue: { summary: "enabled" },
            options: ["enabled", "loading", "disabled"],
            control: "radio",
        },
        counter: {
            description: "Отвечает за наличие компонента Counter",
            defaultValue: { summary: true },
            control: "boolean",
        },
        text: {
            description: "Текстовое содержимое кнопки",
            defaultValue: { summary: "Что сделать" },
            control: "text",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
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
