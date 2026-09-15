
import Image from "next/image";
import Link from "next/link";

import type { Category, Product } from "@/types/product";


export default function ProductDetails( { product, category }: { product: Product, category: Category|null } )
{
    return (
        <section>
            <h1> Produkttitel: {product.title} </h1>

            <p> Beskrivning: {product.description} </p>

            <p> Kategori: {category?.name || "Allmänt"} </p>

            <p> Pris: €{product.price} </p>

            <Image src={product.images[0] || product.thumbnail} alt={product.title} width={1000} height={1000} />
            <Image src={product.images[1] || "/file.svg"}       alt={product.title} width={1000} height={1000} />
            <Image src={product.images[2] || "/file.svg"}       alt={product.title} width={1000} height={1000} />
        </section>
    );
}