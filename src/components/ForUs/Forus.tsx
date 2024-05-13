import React from "react";
import styles from "./Forus.module.scss";
import Image from "next/image";

interface IForUS {
    id: number;
    title: string;
    text: string;
    img: string;
}

const forusData: IForUS[] = [
    {
        id: 1,
        title: "Качество",
        text: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
        img: "/quality.png",
    },
    {
        id: 2,
        title: "Скорость",
        text: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
        img: "/speed.png",
    },
    {
        id: 3,
        title: "Ответственность",
        text: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
        img: "/responsibility.png",
    },
];

const Forus = () => {
    return (
        <div className="container">
            <div className={styles["forus-content"]}>
                <h2 className={styles["forus-title"]}>Что для нас важно</h2>

                <div className={styles["forus-items"]}>
                    {forusData.map((forus) => {
                        return (
                            <div
                                key={forus.id}
                                className={styles["forus-item"]}
                            >
                                <Image
                                    src={forus.img}
                                    alt={forus.title}
                                    width={63}
                                    height={63}
                                />

                                <h5>{forus.title}</h5>

                                <p>{forus.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Forus;
