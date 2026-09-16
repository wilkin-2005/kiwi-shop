
import "./product-details-page.css";

import ProductDetails from "@/components/product-details/product-details";
import { getProductById } from "@/lib/product-api";
import { getCategoryById } from "@/lib/product-api";

import { notFound } from "next/navigation";
import Link from "next/link";


export default async function ProductDetailsPage( {params}: { params: Promise<{ id: string }> } )
{
    // Fetches the product's data
    const { id: idStr } = await params;
    const idNr: number = Number(idStr);

    if(Number.isNaN(idNr)) {
        notFound();
    }
    const product = await getProductById(idNr);

    if (!product) {
        notFound();
    }

    // Fetches the category of the product
    if (!product.categoryId) {
        notFound();
    }
    const category = await getCategoryById(product.categoryId);

    return (
        <div className="page-container">
            <main className="details-page-main">
                <Link href="/#catalogue" className="back-button" > Tillbaka till produktkatalogen... </Link>

                <ProductDetails product={product} category={category} />
            </main>
        </div>
    );
}