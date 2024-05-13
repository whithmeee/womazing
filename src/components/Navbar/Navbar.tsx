"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import cn from "clsx";
import Image from "next/image";
import { MenuList } from "./NavbarList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();

    console.log(pathName);
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
                        />

                        <Link href={"tel: +7 (495) 823-54-12"}>
                            +7 (495) 823-54-12
                        </Link>
                    </div>

                    <button className={styles["header-contacts-btn"]}>
                        <Image
                            src="/basket.png"
                            alt="basket"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
