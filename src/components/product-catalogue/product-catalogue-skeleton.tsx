import "./product-catalogue.css";


const SKELETON_CARD_COUNT = 8;

// ProductCatalogueSkeleton is shown by the <Suspense> boundary in page.tsx
// while ProductCatalogueGrid is fetching products from the API.
export default function ProductCatalogueSkeleton()
{
  return (
    <section className="catalogue-section" aria-busy="true" aria-label="Laddar produkter">
      <h2> Våra produkter </h2>

      <div className="product-grid" role="list">
        {
          Array.from( { length: SKELETON_CARD_COUNT } ).map( (_, index) => (
            <div key={index} className="product-card skeleton-card" role="listitem" aria-hidden="true">
              <div className="skeleton-image" />
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--long" />
              
              <div className="skeleton-footer">
                <div className="skeleton-line skeleton-line--medium" />
                <div className="skeleton-button" />
              </div>
            </div>
          ) )
        }
      </div>
    </section>
  );
}