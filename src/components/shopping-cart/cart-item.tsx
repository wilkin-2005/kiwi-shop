
// "use client";

import type { Product } from "@/types/product";
import { getProductById } from "@/lib/product-api";
import { notFound } from "next/navigation";


async function fetchRandomProduct(): Promise<Product|null>
{
    const randNr: number = Math.floor(Math.random() * 193);
    console.log("randNr = " + randNr);

    const randProduct = await getProductById(randNr);

    return randProduct;
}


export default async function CartItem( productId: number )
{
    // { product }:{ product: Product }

    // const product = fetchRandomProduct();

    // if (!product) {
    //     notFound();
    // }


    return(
        <div>
            <h3> cart item yes </h3>
        </div>
    );
}