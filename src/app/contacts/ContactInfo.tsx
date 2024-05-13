import Link from "next/link";
import styles from "./Contacts.module.scss";

const ContactInfo = () => {
    return (
        <div className={styles["contacts-info"]}>
            <div>
                <p>Телефон</p>
                <Link href={"tel:+7(495)823-54-12"}>+7 (495) 823-54-12</Link>
            </div>
            <div>
                <p>E-mail</p>
                <Link href={"mailto:hello@womazing.com"}>
                    hello@womazing.com
                </Link>
            </div>
            <div>
                <p>Адрес</p>
                <p>г. Москва, 3-я улица Строителей, 25</p>
            </div>
        </div>
    );
};

export default ContactInfo;
