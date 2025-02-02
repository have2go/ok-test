export interface IButtonProps {
    variant?: "primary" | "secondary";
    size: 28 | 36 | 56;
    state?: "enabled" | "loading" | "disabled";
    counter?: boolean;
    loading?: boolean;
    text?: string;
}

export type SizeWithQuantity = 16 | 20 | 24;
export type SizeWithoutQuantity = 8 | 12;

export interface IBaseCounterProps {
    variant?: "primary" | "secondary";
    size: SizeWithQuantity | SizeWithoutQuantity;
    stroke?: boolean;
    pulse?: boolean;
}

export type CounterProps =
    | (IBaseCounterProps & { size: SizeWithQuantity; quantity: number | string })
    | (IBaseCounterProps & { size: SizeWithoutQuantity; quantity?: never });
