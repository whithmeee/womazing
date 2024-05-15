import React from "react";
import "./Modal.css";
import { IModal } from "./Modal.interface";

const Modal = ({ children, isOpen, setIsOpen }: IModal) => {
    return (
        <div
            onClick={() => setIsOpen(false)}
            className={isOpen ? "modal active" : "modal"}
        >
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;
