import { ITEM_COLLECTION } from "@/components/Collection/Collection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ProductPage.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface IProductSimilar {
    id: number | undefined;
}

const ProductSimilar = ({ id }: IProductSimilar) => {
    const filterSlide = ITEM_COLLECTION.filter((item) => item.id !== id);

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];
    return (
        <div className={styles["product-similar"]}>
            <h5>Вам также может понравиться</h5>

            <div className={styles["slider-container"]}>
                <Slide
                    infinite={true}
                    indicators={false}
                    responsive={responsiveSettings}
                >
                    {filterSlide.map((item) => (
                        <Link key={item.id} href={`/shop/${item.id}`}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={350}
                                height={470}
                            />

                            <p>{item.title}</p>
                        </Link>
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default ProductSimilar;
