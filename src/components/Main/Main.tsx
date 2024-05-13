import React from "react";
import styles from "./Main.module.scss";
import MainLeft from "./MainLeft";
import MainRigth from "./MainRigth";

const Main = () => {
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
