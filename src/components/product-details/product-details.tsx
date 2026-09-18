
import Image from "next/image";

import type { Category, Product } from "@/types/product";
import AddToCartButton from "@/components/shopping-cart/add-to-cart-button";
import "./product-details.css";


// A component for viewing a products details.
export default function ProductDetails( { product, category }:{ product: Product, category: Category|null } )
{
    return (
        <article className="product-details-section" aria-labelledby="product-header" >

            <div className="images-container">
                <Image src={product.images[0]} alt="" width={1000} height={1000} loading="eager" />
                {
                    product.images[1] &&
                    <Image src={product.images[1]} alt="" width={1000} height={1000} />
                } {
                    product.images[2] &&
                    <Image src={product.images[2]} alt="" width={1000} height={1000} />
                }
            </div>

            <div className="product-info-container">
                <h1 id="product-header" > {product.title || "Produkttitel"} </h1>

                <p className="description"> {product.description || "Beskrivning"} </p>

                <span className="category"> {category?.name || "Allmän kategori"} </span>

                <p className="price"> €{product.price.toFixed(2) || "Pris"} </p>

                <AddToCartButton />
            </div>

        </article>
    );
}