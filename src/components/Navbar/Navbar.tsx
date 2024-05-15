"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import cn from "clsx";
import Image from "next/image";
import { MenuList } from "./NavbarList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "../Ui/Modal/Modal";
import Button from "../Ui/Button/Button";
import { useAppSelector } from "@/lib/hooks";

const Navbar = () => {
    const pathName = usePathname();
    const products = useAppSelector((s) => s.productSlice.products);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="container">
            <div className={styles["header"]}>
                <Link href={"/"} className={styles["header-logo"]}>
                    <Image src="/logo.png" alt="logo" width={25} height={25} />
                    <h1>Womazing</h1>
                </Link>

                <nav className={styles["header-menu"]}>
                    <ul className={styles["header-menu-list"]}>
                        {MenuList.map((menu) => (
                            <Link
                                className={cn(styles["header-menu-link"], {
                                    [styles["active"]]: pathName === menu.link,
                                })}
                                key={menu.link}
                                href={menu.link}
                            >
                                <li>{menu.name}</li>
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div className={styles["header-contacts"]}>
                    <div className={styles["header-contacts-phone"]}>
                        <Image
                            src="/phone.png"
                            alt="phone"
                            width="27"
                            height="27"
                            onClick={() => setIsOpen(true)}
                        />

                        <Link href={"tel: +7 (495) 823-54-12"}>
                            +7 (495) 823-54-12
                        </Link>
                    </div>

                    <Link className={styles["header-cart"]} href={"/cart"}>
                        <button className={styles["header-contacts-btn"]}>
                            <Image
                                src="/basket.png"
                                alt="basket"
                                width={24}
                                height={24}
                            />
                        </button>

                        <span>{products.length}</span>
                    </Link>
                </div>
            </div>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className={styles["modal-header"]}>
                    <h2>Заказать обратный звонок</h2>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className={styles["modal-form"]}
                    >
                        <div>
                            <input type="text" placeholder="Имя" />
                        </div>
                        <div>
                            <input type="text" placeholder="E-mail" />
                        </div>
                        <div>
                            <input type="text" placeholder="Телефон" />
                        </div>

                        <Button color="blue">Заказать</Button>
                    </form>
                </div>
            </Modal>
        </header>
    );
};

export default Navbar;
