import React from "react";
import Image from "next/image";
import styles from "./Main.module.scss";

const MainRigth = () => {
    return (
        <div className={styles["main-rigth-content"]}>
            <div className={styles["rigth-content"]}>
                <Image
                    src="/image3.jpg"
                    alt="img-3"
                    width={197}
                    height={197}
                    className={styles["image-rigth"]}
                />

                <Image
                    src="/image2.jpg"
                    alt="main-img"
                    width={410}
                    height={646}
                    className={styles["image-main"]}
                />

                <Image
                    src="/image1.jpg"
                    alt="left-image-main"
                    width={190}
                    height={318}
                    className={styles["left-image-main"]}
                />
            </div>
        </div>
    );
};

export default MainRigth;
