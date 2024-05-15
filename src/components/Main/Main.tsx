"use client";
import React, { useState } from "react";
import styles from "./Main.module.scss";
import MainLeft from "./MainLeft";
import MainRigth from "./MainRigth";
import Modal from "../Ui/Modal/Modal";

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container">
            <div className={styles["main"]}>
                <div className={styles["main-content"]}>
                    <MainLeft />
                    <MainRigth />
                </div>
            </div>
        </div>
    );
};

export default Main;
