"use client";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import productServices from "@/services/product.services";
import styles from "./ProductPage.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { PRODUCT_SIZE } from "./ProductSize";
import Loader from "@/components/Ui/Loader/Loader";
import { PRODUCT_COLOR } from "./ProductColor";
import ProductSimilar from "./ProductSimilar";
import { useAppDispatch } from "@/lib/hooks";
import { setProduct } from "@/lib/productSlice";
import Button from "@/components/Ui/Button/Button";
import Modal from "@/components/Ui/Modal/Modal";

export interface IProductDetail {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string[];
    category: number;
    count: number;
}

const ProductPage = ({ params }: { params: { id: number } }) => {
    const pathname = usePathname();
    const [sizeActive, setSizeActive] = useState<null | number>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const { data, isPending, error } = useQuery({
        queryKey: ["productPage", params.id],
        queryFn: () => productServices.getById(params.id),
        select: ({ data }) => data,
        enabled: true,
    });

    const handleClickSizeActive = (index: number) => {
        setSizeActive(index);
    };

    const handleClickAddProduct = () => {
        dispatch(setProduct(data));
        setIsOpen(true);
    };

    return (
        <div className="container">
            <div className={styles["product-detail"]}>
                <h6>{data?.title}</h6>

                <div className={styles["product-links"]}>
                    <Link href={"/"}>Главная /</Link>
                    <Link
                        className={styles["product-link"]}
                        href={`/shop/${params.id}`}
                    >
                        {isPending ? (
                            "Загрузка..."
                        ) : pathname === `/shop/${params.id}` ? (
                            <>
                                <Link href={"/shop"}>{data?.category}/</Link>
                                <Link href={`/shop/${data?.id}`}>
                                    {data?.title}
                                </Link>
                            </>
                        ) : (
                            <p>Загрузка...</p>
                        )}
                    </Link>
                </div>
                <div className={styles["product-item"]}>
                    <div className={styles["product-slider"]}>
                        {isPending === true ? (
                            <div className={styles["product-loader"]}>
                                <Loader />
                            </div>
                        ) : (
                            <Slide>
                                {data?.image.map((img, index) => (
                                    <div
                                        key={index}
                                        className={styles["each-slide-effect"]}
                                    >
                                        <Image
                                            src={img}
                                            alt="img"
                                            width={570}
                                            height={500}
                                            className={
                                                styles["each-slide-effect"]
                                            }
                                        />
                                    </div>
                                ))}
                            </Slide>
                        )}
                    </div>

                    <div className={styles["product-info"]}>
                        <p className={styles["product-info-price"]}>
                            {data?.price}$
                        </p>

                        <div className={styles["product-sizes"]}>
                            <p className={styles["size-title"]}>
                                Выберите размер
                            </p>

                            <ul className={styles["lists-size"]}>
                                {PRODUCT_SIZE.map((size, index) => (
                                    <li
                                        key={index}
                                        className={
                                            styles[
                                                sizeActive === index
                                                    ? "active"
                                                    : "size"
                                            ]
                                        }
                                        onClick={() =>
                                            handleClickSizeActive(index)
                                        }
                                    >
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles["product-colors"]}>
                            <p>Выберите цвет</p>

                            <ul>
                                {PRODUCT_COLOR.map((color) => (
                                    <li
                                        key={color}
                                        style={{ background: `${color}` }}
                                    >
                                        {"."}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles["product-button"]}>
                            <span>{data?.count}</span>
                            <Button
                                onClick={handleClickAddProduct}
                                color="blue"
                            >
                                Добавить в корзину
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ProductSimilar id={data?.id} />
            </div>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div>
                    <h2>Товар добавлен в корзину</h2>

                    <p>{data?.title}</p>
                </div>
            </Modal>
        </div>
    );
};

export default ProductPage;
