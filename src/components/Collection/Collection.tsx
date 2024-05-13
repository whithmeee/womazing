"use client";
import React from "react";
import styles from "./Collection.module.scss";
import Button from "../Ui/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface IItemCollection {
    id: number;
    image: string;
    title: string;
    price: string;
    arrow: string;
}

const ITEM_COLLECTION: IItemCollection[] = [
    {
        id: 1,
        image: "/miss1.jpg",
        arrow: "/arrow-item.png",
        title: "Джинсовый полиэстер",
        price: "$270",
    },
    {
        id: 2,
        image: "/miss3.jpg",
        title: "Жаккардовая джинсовая куртка",
        arrow: "/arrow-item.png",
        price: "$320",
    },
    {
        id: 3,
        image: "/miss2.jpg",
        title: "Мини-платье из кружевного шифона",
        arrow: "/arrow-item.png",
        price: "$350",
    },
];

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
    },
];

const Collection = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["collection-content"]}>
                <h2 className={styles["collection-title"]}>Новая коллекция</h2>

                <div className={styles["collection-items"]}>
                    <Slide
                        slidesToScroll={1}
                        slidesToShow={3}
                        indicators={true}
                        responsive={responsiveSettings}
                    >
                        {ITEM_COLLECTION.map((item) => {
                            return (
                                <Link
                                    href={`/shop/${item.id}`}
                                    key={item.id}
                                    className={styles["collection-item"]}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                    />

                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                </Link>
                            );
                        })}
                    </Slide>
                </div>

                <Link className={styles["collection-button"]} href={"/shop"}>
                    <Button children="Открыть магазин" color="white" />
                </Link>
            </div>
        </div>
    );
};

export default Collection;