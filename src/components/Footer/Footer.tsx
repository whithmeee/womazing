import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { footerList } from "./FooterList";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className="container">
                <div className={styles["footer-content"]}>
                    <Link href={"/"} className={styles["header-logo"]}>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={25}
                            height={25}
                        />
                        <h2>Womazing</h2>
                    </Link>

                    <nav className={styles["footer-links"]}>
                        <ul className={styles["footer-link"]}>
                            {footerList.map((link) => {
                                return (
                                    <Link key={link.id} href={link.link}>
                                        {<li>{link.name}</li>}
                                    </Link>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className={styles["footer-contacts"]}>
                        <Link href={"tel:+7 (495) 823-54-12"}>
                            +7 (495) 823-54-12
                        </Link>
                        <Link href={"@mailto:hello@womazing.com"}>
                            hello@womazing.com
                        </Link>
                    </div>
                </div>

                <div className={styles["footer-info"]}>
                    <div className={styles["footer-offer"]}>
                        <p>© Все права защищены</p>
                        <p>Политика конфиденциальности</p>
                        <p>Публичная оферта</p>
                    </div>

                    <div className={styles["footer-icons"]}>
                        <div className={styles["footer-social-icons"]}>
                            <Image
                                src="/instagram.png"
                                alt="instagram"
                                width={22}
                                height={22}
                            />
                            <Image
                                src="/facebook.png"
                                alt=""
                                width={22}
                                height={22}
                            />
                            <Image
                                src="/twitter.png"
                                alt=""
                                width={22}
                                height={22}
                            />
                        </div>

                        <div>
                            <Image
                                src="/visa.png"
                                alt="visa"
                                width={68}
                                height={22}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
