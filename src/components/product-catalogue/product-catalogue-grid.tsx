
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { getProducts } from "@/lib/product-api";


// ProductCard component to render individual product cards in the ProductCatalogueGrid.
function ProductCard( {product}: {product: Product} )
{
  return (
    <article key={product.id} className="product-card" role="listitem">

      <Link href={`/products/${product.id}`} className="product-card-header">
        <div className="product-image-container">
          
          <Image src={product.thumbnail || product.images?.[0] || "/file.svg"}
            width={300} height={300}
            alt={product.title} loading="lazy" />
        </div>

        <span className="product-category"> {product.brand || "!Allmänt!"} </span>
        <h3 className="product-title"> {product.title} </h3>
      </Link>

      <div className="product-card-footer">
        <p className="product-price"> €{product.price.toFixed(2)} </p>

        <button type="button" className="add-to-cart-button"> <span>Lägg i varukorg</span> </button>
      </div>

    </article>
  );
}


// ProductCatalogueGrid component for the Kiwi Shop website. It displays a grid of products (with component ProductCard).
// If no products are available, it shows placeholder cards.
export default async function ProductCatalogueGrid()
{
  let products: Product[] = [];
  
  try {
    products = await getProducts();
  } catch (error) {
    // If the local product API is not running yet during initial layout review
    console.error("Could not load products from API:", error);
  }


  return (
    <section id="catalogue" aria-labelledby="catalogue-heading" className="catalogue-section">
      <h2 id="catalogue-heading"> Våra produkter </h2>

      <div className="product-grid" role="list">
        {
          products.length > 0 ? (
          products.map((product) => (
            ProductCard({ product })
          ))
        ) : (
          /* Platshållare/exempelkort om inga produkter finns / API inte är aktivt */
          Array.from({ length: 8 }).map((_, index) => (
            <article key={index} className="product-card" role="listitem">
              <Link href={`/products/${index + 1}`} className="product-card-header">
                <div className="product-image-container">
                  <div className="image-placeholder">[Produktbild]</div>
                </div>
                <span className="product-category">Kategori</span>
                <h3 className="product-title">Exempelprodukt {index + 1}</h3>
              </Link>

              <div className="product-card-footer">
                <p className="product-price">€{(19.99 * (index + 1)).toFixed(2)}</p>
                <button type="button" className="add-to-cart-button">
                  <span>Lägg i varukorg</span>
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}