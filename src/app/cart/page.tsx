"use client";
import React from "react";
import styles from "./Cart.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Cart = () => {
    const pathname = usePathname();
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
            </div>
        </div>
    );
};

export default Cart;
