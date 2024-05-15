"use client";
import React from "react";
import styles from "./Cart.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { productDecrement, setProduct } from "@/lib/productSlice";
import Button from "@/components/Ui/Button/Button";

const Cart = () => {
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const products = useAppSelector((s) => s.productSlice.products);

    const handleProductCount = (id: number) => {
        dispatch(setProduct({ id: id }));
    };

    const handleProductDecrement = (id: number) => {
        dispatch(productDecrement({ id: id }));
    };

    return (
        <div className="container">
            <div className={styles["cart"]}>
                <h2>Корзина</h2>

                <div className={styles["cart-links"]}>
                    <Link href={"/"}>Главная /</Link>
                    <Link className={styles["cart-link"]} href={"/cart"}>
                        {pathname === "/cart" ? "Корзина" : "Другая страница"}
                    </Link>
                </div>

                {products.length > 0 ? (
                    <div className={styles["cart-items"]}>
                        <div className={styles["cart-title"]}>
                            <p>Товар</p>

                            <div className={styles["cart-subtitle"]}>
                                <p>Цена</p>
                                <p>Количество</p>
                                <p>Всего</p>
                            </div>
                        </div>
                        <div className={styles["cart-item"]}>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={styles["item"]}
                                >
                                    <div className={styles["item-img"]}>
                                        <Image
                                            src={product.image[0]}
                                            alt={product.title}
                                            width={136}
                                            height={205}
                                        />

                                        <p>{product.title}</p>
                                    </div>

                                    <div className={styles["item-info"]}>
                                        <p>{product.price}$</p>
                                        <div className={styles["item-count"]}>
                                            <button
                                                onClick={() =>
                                                    handleProductCount(
                                                        product.id
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                            <span>{product.count}</span>
                                            <button
                                                onClick={() =>
                                                    handleProductDecrement(
                                                        product.id
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                        </div>
                                        <p>{product.price}$</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles["cart-length"]}>
                        <h3>В вашей корзине нет товаров.</h3>
                        <Link href={"/shop"}>
                            <Button color="white">Перейти в магазин</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
