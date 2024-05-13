import React from "react";
import styles from "./Womazing.module.scss";
import WomazingSlider from "./WomazingSlider";
import Link from "next/link";

const sliders = [
    {
        url: "/slider1.png",
    },
    {
        url: "/slider2.png",
    },
    {
        url: "/slider3.png",
    },
];

console.log(sliders);

const Womazing = () => {
    return (
        <div className="container">
            <div className={styles["womazing-content"]}>
                <h2>Команда мечты Womazing</h2>

                <div className={styles["womazing-slider"]}>
                    <WomazingSlider sliders={sliders} />

                    <div className={styles["womazing-slider-text"]}>
                        <h6>Для каждой</h6>

                        <p>
                            Каждая девушка уникальна. Однако, мы схожи в
                            миллионе мелочей.
                        </p>
                        <p>
                            Womazing ищет эти мелочи и создает прекрасные вещи,
                            которые выгодно подчеркивают достоинства каждой
                            девушки.
                        </p>

                        <Link href={"/about"}>Подробнее о бренде</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Womazing;
