"use client";
import React, { useState } from "react";
import styles from "./Shop.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CATEGORY } from "./ShopCategory";
import Button from "@/components/Ui/Button/Button";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Ui/Loader/Loader";
import Image from "next/image";

interface IProduct {
    id: number;
    title: string;
    image: string;
    price: number;
}

const Shop = () => {
    const pathname = usePathname();
    const [categoryActive, setCategoryActive] = useState(0);

    const { data, isPending, error } = useQuery({
        queryKey: ["items", categoryActive],
        queryFn: async () => {
            let url = "https://1608ba9daedea661.mokky.dev/product";
            if (categoryActive !== 0) {
                url += `?category=${categoryActive}`;
            }
            return await axios.get<IProduct[]>(url).then((res) => res.data);
        },
    });

    const handleClick = (id: number) => {
        setCategoryActive(id);
    };

    if (error) return "An error has occurred: " + error.message;
    return (
        <div className="container">
            <div className={styles["shop"]}>
                <div className={styles["shop-content"]}>
                    <div className={styles["shop-title"]}>
                        <h2>Магазин</h2>

                        <Link href={"/"}>Главная /</Link>
                        <Link className={styles["shop-link"]} href={"/shop"}>
                            {pathname === "/shop" ? "Магазин" : null}
                        </Link>
                    </div>

                    <div className={styles["shop-category"]}>
                        {CATEGORY.map((category) => (
                            <Button
                                key={category.id}
                                color={`${
                                    categoryActive === category.id
                                        ? "active"
                                        : "white"
                                }`}
                                onClick={() => handleClick(category.id)}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>

                    <div className={styles["shop-count"]}>
                        <p>
                            Показано {`${data ? data.length : "Загрузка..."}`}{" "}
                            из 12 товаров
                        </p>
                    </div>

                    <div className={styles["shop-products"]}>
                        {isPending && <Loader />}
                        {data &&
                            data.map((product) => (
                                <Link
                                    className={styles["products-link"]}
                                    href={`/shop/${product.id}`}
                                    key={product.id}
                                >
                                    <div className={styles["product"]}>
                                        <Image
                                            src={product.image}
                                            alt="#"
                                            width={350}
                                            height={470}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                        <h5>{product.title}</h5>
                                        <p>{product.price}$</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
