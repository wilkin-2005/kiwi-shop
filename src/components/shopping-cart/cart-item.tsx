
import "./cart-item.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types/product";


export default async function CartItem( { product }:{ product: Product|null } )
{
    if (!product) {
        notFound();
    }

    const quantity = 1;

    const discountAmount = product.price * (product.discountPercentage ?? 0) / 100;

    const totalPrice: number = quantity * (product.price - discountAmount);

    return(
        <li className="cart-list-item">
            <Image src={product.thumbnail || "/file.svg"} alt="" width={300} height={300} />

            <h3> {product.title} </h3>

            <div className="quantity-picker">
                <button type="button" className="button-primary" > - </button>
                <span> {quantity || "x"} </span>
                <button type="button" className="button-primary" > + </button>
            </div>

            <p> Pris per produkt: €{product.price.toFixed(2)} </p>

            <p> Rabbat: {product.discountPercentage}% </p>

            <p> Rabbatmängd: €{discountAmount.toFixed(2)} </p>

            <p> Totalt: €{totalPrice.toFixed(2)} </p>

            <button type="button" className="button-primary" > x </button>
        </li>
    );
}