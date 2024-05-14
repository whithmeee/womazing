import { IProductDetail } from "@/app/shop/[id]/page";
import { IProduct } from "@/app/shop/page";
import axios from "axios";

class ProductService {
    async getAll(categoryActive: string) {
        let url = "https://1608ba9daedea661.mokky.dev/product";

        if (categoryActive !== "Все") {
            url += `?category=${categoryActive}`;
        }
        return axios.get<IProduct[]>(url);
    }
    getById(id: number) {
        return axios.get<IProductDetail>(
            `https://1608ba9daedea661.mokky.dev/productDetail/${id}`
        );
    }
}

export default new ProductService();
