
import Image from "next/image";

import type { Category, Product } from "@/types/product";
import AddToCartButton from "@/components/shopping-cart/add-to-cart-button";
import "./product-details.css";



function ImageSlides( images: string[] )
{
    const imgAmount: number = images.length;

    return(
        <div className="images-container">
            <Image src={images[0] || "/file.svg"} alt="" width={1000} height={1000} loading="eager" />
            <Image src={images[1] || "/file.svg"} alt="" width={1000} height={1000} />
            <Image src={images[2] || "/file.svg"} alt="" width={1000} height={1000} />
        </div>
    );
}



export default function ProductDetails( { product, category }:{ product: Product, category: Category|null } )
{


    return (
        <article className="product-details-section" aria-labelledby="product-header" >

            {/* <ImageSlides images={product.images} /> */}
            <div className="images-container">
                <Image src={product.images[0] || "/file.svg"} alt="" width={1000} height={1000} loading="eager" />
                <Image src={product.images[1] || "/file.svg"} alt="" width={1000} height={1000} />
                <Image src={product.images[2] || "/file.svg"} alt="" width={1000} height={1000} />
            </div>

            <div className="product-info-container">
                <h1 id="product-header" > {product.title || "Produkttitel"} </h1>

                <p className="description"> {product.description || "Beskrivning"} </p>

                <span className="category"> {category?.name || "Allmän kategori"} </span>

                <p className="price"> €{product.price || "Pris"} </p>

                <AddToCartButton />
            </div>

        </article>
    );
}