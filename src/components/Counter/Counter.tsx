import React from "react";
import "./Counter.stylus";

type SizeWithQuantity = 16 | 20 | 24;
type SizeWithoutQuantity = 8 | 12;

interface IBaseCounterProps {
    variant?: "primary" | "secondary";
    size: SizeWithQuantity | SizeWithoutQuantity;
    stroke?: boolean;
    pulse?: boolean;
}

type CounterProps =
    | (IBaseCounterProps & { size: SizeWithQuantity; quantity?: number | string })
    | (IBaseCounterProps & { size: SizeWithoutQuantity; quantity?: never });

const Counter: React.FC<CounterProps> = ({ variant = "primary", size, stroke = false, quantity, pulse = false }) => {
    const getDisplayValue = (): string => {
        if (typeof quantity === "number") {
            if (quantity < 0 || quantity === 0) {
                return "";
            }
            return quantity > 99 ? "99+" : quantity.toString();
        }
        if (typeof quantity === "string") {
            return quantity.slice(0, 3);
        }
        return "";
    };
    const displayValue = getDisplayValue();

    const getSizeString = (): string => {
        switch (size) {
            case 8:
                return "xs";
            case 12:
                return "sm";
            case 16:
                return "md";
            case 20:
                return "lg";
            case 24:
                return "xl";
        }
    };
    const sizeMod = getSizeString();

    const counterStyles = [
        "counter",
        `counter_${variant}`,
        `counter_${sizeMod}`,
        stroke && "counter_stroke",
        pulse && size <= 12 && "counter_pulse",
    ].join(" ");

    return (
        <div className={counterStyles}>
            {displayValue && <span className="counter__value">{displayValue}</span>}
            {pulse && (
                <>
                    <div className="counter__pulse counter__pulse_one"></div>
                    <div className="counter__pulse counter__pulse_two"></div>
                </>
            )}
        </div>
    );
};

export default Counter;
