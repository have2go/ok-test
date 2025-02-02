import React from "react";
import Counter from "./Counter";
import "./Button.stylus";
import * as T from "../utils/types";
import { useRippling } from "../hooks/useRippling";
import { ReactComponent as Loader16 } from "../assets/loader-16.svg";
import { ReactComponent as Loader20 } from "../assets/loader-20.svg";
import { ReactComponent as Loader24 } from "../assets/loader-24.svg";

const Button: React.FC<T.IButtonProps> = ({
    variant = "primary",
    size,
    state = "enabled",
    counter = false,
    text = "Что сделать",
}) => {
    const { x, y, handleRippleOnClick, isRippling } = useRippling();

    return (
        <button
            className={`button button_${variant} button_${size} button_${state}`}
            disabled={state === "disabled"}
            onMouseDown={e => handleRippleOnClick(e)}
        >
            <span className={`button__content-group ${state === "loading" ? "button__content-group_hidden" : ""}`}>
                {text && <span className="button__text">{text}</span>}
                {counter && size === 28 && <Counter size={8} pulse variant={variant} />}
                {counter && size === 36 && <Counter size={16} variant={variant} quantity={7} />}
                {counter && size === 56 && <Counter size={24} variant={variant} quantity={100} stroke />}
            </span>
            {state === "loading" && (
                <>
                    <div className="button__shimmer"></div>
                    <div className="button__loader-container">
                        {size === 28 && <Loader16 />}
                        {size === 36 && <Loader20 />}
                        {size === 56 && <Loader24 />}
                    </div>
                </>
            )}
            {isRippling && (
                <div className={"button__ripple-container"}>
                    <span
                        className={"button__ripple"}
                        style={{
                            left: x,
                            top: y,
                        }}
                    />
                </div>
            )}
        </button>
    );
};

export default Button;
