"use client";
import React from "react";
import styles from "./About.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Ui/Button/Button";

const About = () => {
    const pathname = usePathname();

    return (
        <div className="container">
            <div className={styles["about"]}>
                <h2>О бренде</h2>

                <div className={styles["about-links"]}>
                    <Link href={"/"}>Главная /</Link>
                    <Link className={styles["about-brands"]} href={"/about"}>
                        {pathname === "/about" ? "О бренде" : "Другая страница"}
                    </Link>
                </div>

                <div className={styles["about-items"]}>
                    <div className={styles["about-item-one"]}>
                        <Image
                            src="/about-image1.png"
                            alt="image-one"
                            width={442}
                            height={547}
                        />

                        <div className={styles["item-one-text"]}>
                            <h4>Идея и женщина</h4>

                            <p className={styles["text-one"]}>
                                Womazing была основана в 2010-ом и стала одной
                                из самых успешных компаний нашей страны. Как и
                                многие итальянские фирмы, Womazing остаётся
                                семейной компанией, хотя ни один из членов семьи
                                не является модельером.
                            </p>

                            <p className={styles["text-two"]}>
                                Мы действуем по успешной формуле, прибегая к
                                услугам известных модельеров для создания своих
                                коллекций. Этот метод был описан критиком моды
                                Колином Макдауэллом как форма дизайнерского
                                со-творчества, характерная для ряда итальянских
                                prêt-a-porter компаний.
                            </p>
                        </div>
                    </div>
                    <div className={styles["about-item-two"]}>
                        <div className={styles["item-two-text"]}>
                            <h4>Магия в деталях</h4>

                            <p>
                                Первый магазин Womazing был открыт в маленьком
                                городке на севере страны в 2010-ом году. Первая
                                коллекция состояла из двух пальто и костюма,
                                которые были копиями парижских моделей.
                            </p>
                            <p>
                                Несмотря на то, что по образованию
                                основательница была адвокатом, ее семья всегда
                                была тесно связана с шитьём (прабабушка
                                основательницы шила одежду для женщин, а мать
                                основала профессиональную школу кроя и шитья).
                                Стремление производить одежду для масс несло в
                                себе большие перспективы, особенно в то время,
                                когда высокая мода по-прежнему доминировала, а
                                рынка качественного prêt-a-porter попросту не
                                существовало.{" "}
                            </p>
                        </div>

                        <Image
                            src="/about-image2.png"
                            alt="image-2"
                            width={442}
                            height={547}
                        />
                    </div>
                </div>

                <div className={styles["about-link"]}>
                    <Link href={"/shop"}>
                        <Button color="blue">Перейти в магазин</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
