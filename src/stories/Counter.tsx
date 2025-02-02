import React from "react";
import "./Counter.stylus";
import * as T from "../utils/types";

const Counter: React.FC<T.CounterProps> = ({ variant = "primary", size, stroke = false, quantity, pulse = false }) => {
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

    return (
        <div
            className={`counter counter_${variant} counter_${size} ${stroke && "counter_stroke"} ${
                pulse && size <= 12 && "counter_pulse"
            }`}
        >
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
