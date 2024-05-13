"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import ContactMaps from "./ContactMaps";
import ContactForm from "./ContactForm";

import styles from "./Contacts.module.scss";

const Contacts = () => {
    const pathname = usePathname();
    return (
        <div className="container">
            <div className={styles["contacts"]}>
                <div className={styles["contacts-content"]}>
                    <div className={styles["contacts-title"]}>
                        <h2>Контакты</h2>

                        <div className={styles["contacts-links"]}>
                            <Link href={"/"}>Главная /</Link>
                            <Link
                                className={styles["contacts-links-contact"]}
                                href={"/contacts"}
                            >
                                {pathname === "/contacts" ? "Контакты" : null}
                            </Link>
                        </div>
                    </div>
                    <ContactMaps />
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
