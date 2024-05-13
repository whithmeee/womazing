"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ProductPage = ({ params }: { params: { id: number } }) => {
    const pathname = usePathname();

    return <div className="container">productPage {params.id}</div>;
};

export default ProductPage;
