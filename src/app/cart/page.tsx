
import "./cart-page.css";
import CartItem from "@/components/shopping-cart/cart-item";
import { getProductById } from "@/lib/product-api";


// Shopping cart page for showing user 5 random products in their cart.
export default async function ShoppingCartPage()
{
    const productsInCart = [];

    // Fetches 5 products from random ID-numbers.
    for(let i = 0; i < 5; i++)
    {
        const productId: number = Math.floor(Math.random() * 193);
        productsInCart[i] = await getProductById(productId);
    }

    // Calculates the total price prior to adding discounts
    const pricePreDiscount = productsInCart.reduce(
        (total, product) => total + (product?.price ?? 0),
        0
    );

    // Calculates the total discount in euros (not percent).
    const totalDiscount = productsInCart.reduce(
        (total, product) =>
            total + (product
                ? product.price * (product.discountPercentage ?? 0) / 100
                : 0),
        0
    );

    const totalPrice = pricePreDiscount - totalDiscount;

    const shippingCost = (totalPrice < 100) ? "€5.99" : "Gratis";


    return(
        <div className="page-container">
            <h1 className="cart-page-heading"> Din varukorg </h1>

            <main className="page-main cart-page-main">

                <section className="cart-items-container">
                    <h2> Produkter i varukorgen </h2>

                    <ul>
                        { productsInCart.length > 0
                            ? productsInCart.map( (product) => <CartItem product={product} key={product?.id} /> )
                            : <p className="catalogue-empty-message"> Inga produkter hittades. </p>
                        }
                    </ul>
                </section>

                <section className="summary-container">
                    <h2> Sammanfattning </h2>

                    <div className="summary-group">
                        <span> Antal produkter: </span>
                        <span> {productsInCart.length} produkter </span>
                    </div>

                    <div className="summary-group">
                        <span> Pris före rabbat: </span>
                        <span> €{pricePreDiscount.toFixed(2)} </span>
                    </div>

                    <div className="summary-group">
                        <span> Total rabbat: </span>
                        <span> €{totalDiscount.toFixed(2)} </span>
                    </div>

                    <div className="summary-group">
                        <span> Pris för frakt: </span>
                        <span> {shippingCost} </span>
                    </div>

                    <div className="summary-group total">
                        <span> Totalt: </span>
                        <span> €{totalPrice.toFixed(2)} </span>
                    </div>

                    <button type="button" className="button-primary" > Gå till kassan </button>

                </section>

            </main>

        </div>
    );
}