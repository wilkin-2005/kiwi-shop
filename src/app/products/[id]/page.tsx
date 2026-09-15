
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import ProductDetails from "@/components/product-details/product-details";
import { getProductById } from "@/lib/product-api";
import { getCategoryById } from "@/lib/product-api";

import { notFound } from "next/navigation";


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
        <div>
            <Header />

            <main>
                <ProductDetails product={product} category={category} />
            </main>

            <Footer />

        </div>
    );
}