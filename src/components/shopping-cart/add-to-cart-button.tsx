
import Link from "next/link";
import "./shopping-cart.css";

export default function AddToCartButton()
{
    return (
        <>
            {/* <button type="button" className="add-to-cart-button" > Lägg i varukorg </button> */}
            <Link href="/cart" className="add-to-cart-button" > Lägg i varukorg </Link>
        </>
    );
}