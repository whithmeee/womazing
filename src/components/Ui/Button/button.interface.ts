import { HTMLAttributes } from "react";

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    apperence?: "small" | "medium" | "big";
    color?: "black" | "white" | "blue" | "active";
}
