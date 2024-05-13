import React from "react";
import styles from "./Button.module.scss";
import cn from "clsx";
import { IButton } from "./button.interface";

const Button = ({ children, color, ...props }: IButton) => {
    return (
        <button
            className={cn(styles["button"], {
                [styles["blue"]]: color === "blue",
                [styles["white"]]: color === "white",
                [styles["black"]]: color === "black",
                [styles["active"]]: color === "active",
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
