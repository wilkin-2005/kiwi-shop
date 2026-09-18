
import Link from "next/link";

export default function AddToCartButton()
{
    return (
        <>
            {/* <button type="button" className="add-to-cart-button" > Lägg i varukorg </button> */}
            <Link href="/cart" className="button-primary" > Lägg i varukorg </Link>
        </>
    );
}