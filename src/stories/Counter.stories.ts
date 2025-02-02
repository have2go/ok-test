import type { Meta, StoryObj } from "@storybook/react";
import Counter from "../components/Counter/Counter";

const meta = {
    title: "Main/Counter",
    component: Counter,
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
            description: "Размер",
            options: [8, 12, 16, 20, 24],
            control: "radio",
        },
        stroke: {
            description:
                "Отвечает за наличие обводки у основного фрейма.\n\nТолщина линии обводки предопределена параметром size",
            defaultValue: { summary: false },
            control: "boolean",
        },
        quantity: {
            description: `Значение счётчика.\n\nМаксимальное количество символов: 3\n\nЕсли числовое значение (int) превышает 99, то компонент отображает 99+\n\nЕсли символьное значение (string) превышает длину в 3 символа, то компонент отображает только первые 3`,
            defaultValue: { summary: 1 },
            control: {
                type: "number",
            },
        },
        pulse: {
            description: "Отвечает за включение анимации pulse",
            defaultValue: { summary: false },
            control: "boolean",
        },
    },
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithNumber: Story = {
    args: {
        variant: "primary",
        size: 24,
        stroke: false,
        quantity: 1,
    },
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: "radio",
        },
        size: {
            options: [16, 20, 24],
            control: "radio",
        },
        pulse: {
            table: {
                disable: true,
            },
        },
    },
};

export const WithString: Story = {
    args: {
        variant: "primary",
        size: 24,
        stroke: false,
        quantity: "abcde",
    },
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: "radio",
        },
        size: {
            options: [16, 20, 24],
            control: "radio",
        },
        quantity: {
            control: "text",
        },
        pulse: {
            table: {
                disable: true,
            },
        },
    },
};

export const WithoutContent: Story = {
    args: {
        variant: "primary",
        size: 12,
        stroke: false,
        pulse: true,
    },
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: "radio",
        },
        size: {
            options: [8, 12],
            control: "radio",
        },
        quantity: {
            table: {
                disable: true,
            },
        },
    },
};
