import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { getProducts } from "@/lib/product-api";
import "./product-catalogue.css";


// ProductCard component to render individual product cards in the ProductCatalogueGrid.
function ProductCard({ product }: { product: Product })
{
  return (
    <article key={product.id} className="product-card" role="listitem" aria-labelledby={`product_${product.id}`} >
      
      <Link href={`/products/${product.id}`} className="product-card-header">
        <div className="product-image-container">
          <Image src={product.thumbnail || product.images?.[0] || "/file.svg"} loading="lazy"
            width={300} height={300} alt="" />
        </div>

        <span className="product-category"> {product.brand || "Allmänt"} </span>
        <h3 id={`product_${product.id}`} className="product-title"> {product.title} </h3>
      </Link>

      <div className="product-card-footer">
        <p className="product-price"> €{product.price.toFixed(2)} </p>

        <button type="button" className="add-to-cart-button"> Lägg i varukorg </button>
      </div>
      
    </article>
  );
}


// ProductCatalogueGrid component for the Kiwi Shop website. It displays a grid of products (with component ProductCard).
// Errors from getProducts() bubble up to the nearest Next.js error boundary (src/app/error.tsx).
export default async function ProductCatalogueGrid()
{
  const products = await getProducts();

  return (
    <section id="catalogue" aria-labelledby="catalogue-heading" className="catalogue-section" >
      <h2 id="catalogue-heading"> Våra produkter </h2>

      <div className="product-grid" role="list">
        { products.length > 0
            ? products.map( (product) => <ProductCard key={product.id} product={product} /> )
            : <p className="catalogue-empty-message"> Inga produkter hittades. </p>
        }
      </div>
    </section>
  );
}