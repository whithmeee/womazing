import React from "react";
import styles from "./Contacts.module.scss";
import Button from "@/components/Ui/Button/Button";

const ContactForm = () => {
    return (
        <form className={styles["contacts-form"]}>
            <h4>Напишите нам</h4>

            <div>
                <label htmlFor="">Имя</label>
                <input type="text" placeholder="Имя" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="">Телефон</label>
                <input type="number" placeholder="Телефон" />
            </div>
            <div>
                <textarea placeholder="Сообщение"></textarea>
            </div>

            <Button color="blue">Отправить</Button>
        </form>
    );
};

export default ContactForm;
