import React from "react";
import Image from "next/image";
import styles from "./Main.module.scss";
import Button from "../Ui/Button/Button";
import Link from "next/link";

const MainLeft = () => {
    return (
        <div className={styles["main-content-left"]}>
            <h1>Новые поступления в этом сезоне</h1>

            <p>
                Утонченные сочетания и бархатные оттенки - вот то, что вы искали
                в этом сезоне. Время исследовать.
            </p>

            <div className={styles["main-content-left-btn"]}>
                <Image src="/arrow.png" alt="arrow" width={68} height={68} />
                <Link href={"/shop"}>
                    <Button color="blue" children="Открыть Магазин" />
                </Link>
            </div>
        </div>
    );
};

export default MainLeft;
