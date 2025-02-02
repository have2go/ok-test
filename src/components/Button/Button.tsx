import React from "react";
import Counter from "../Counter/Counter";
import "./Button.stylus";
import { useRippling } from "../../hooks/useRippling";
import { ReactComponent as Loader16 } from "../../assets/loader-16.svg";
import { ReactComponent as Loader20 } from "../../assets/loader-20.svg";
import { ReactComponent as Loader24 } from "../../assets/loader-24.svg";

interface IButtonProps {
    variant?: "primary" | "secondary";
    size: 28 | 36 | 56;
    state?: "enabled" | "loading" | "disabled";
    counter?: boolean;
    counterValue?: string | number;
    loading?: boolean;
    text?: string;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
    variant = "primary",
    size = 56,
    state = "enabled",
    counter = false,
    counterValue = 1,
    text = "Что сделать",
    onClick,
}) => {
    const { x, y, handleRippleOnClick, isRippling } = useRippling();

    const getSizeString = () => {
        switch (size) {
            case 28:
                return "sm";
            case 36:
                return "md";
            case 56:
                return "lg";
        }
    };

    const sizeMod = getSizeString();

    const buttonStyles = ["button", `button_${variant}`, `button_${sizeMod}`, `button_${state}`].join(" ");

    return (
        <button
            className={buttonStyles}
            disabled={state === "disabled"}
            onMouseDown={e => handleRippleOnClick(e)}
            onClick={onClick}
        >
            <span className={`button__content-group ${state === "loading" && "button__content-group_hidden"}`}>
                {text && <span className="button__text">{text}</span>}
                {counter && sizeMod === "sm" && <Counter size={8} pulse variant={variant} />}
                {counter && sizeMod === "md" && <Counter size={16} variant={variant} quantity={counterValue} stroke />}
                {counter && sizeMod === "lg" && <Counter size={24} variant={variant} quantity={100} />}
            </span>
            {state === "loading" && (
                <>
                    <div className="button__shimmer"></div>
                    <div className="button__loader-container">
                        {sizeMod == "sm" && <Loader16 className="button__loader" />}
                        {sizeMod === "md" && <Loader20 className="button__loader" />}
                        {sizeMod === "lg" && <Loader24 className="button__loader" />}
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
