
import "./filter-section.css";


// Component for the search and filter section of the Kiwi Shop website.
export default function FilterSection() {
  return (
    <section aria-label="Sök och filtrera produkter" className="filter-section" >
      <form className="filter-form">

        <div className="form-group search" >
          <label htmlFor="search-input" > Sök produkter </label>
          <input type="search" id="search-input" name="query" placeholder="Sök bland produkter..." />
        </div>

        <div className="form-row">

          <div className="form-group category">
            <label htmlFor="category-select"> Kategori </label>

            <select id="category-select" name="category" defaultValue="" >
              <option value="">Alla kategorier</option>
              <option value="beauty">Skönhet</option>
              <option value="fragrances">Dofter</option>
              <option value="furniture">Möbler</option>
              <option value="groceries">Livsmedel</option>
            </select>
          </div>

          <div className="form-group sorting" >
            <label htmlFor="sort-select"> Sortera efter </label>

            <select id="sort-select" name="sort" defaultValue="latest" >
              <option value="latest"> Senaste </option>
              <option value="price_asc"> Pris: Lågt till högt </option>
              <option value="price_desc"> Pris: Högt till lågt </option>
              <option value="rating_desc"> Högst betyg </option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" name="in_stock_only" />
              <span> Endast i lager </span>
            </label>
          </div>

          <button type="submit" className="submit-button">
            {/* !Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M96 128C83.1 128 71.4 135.8 66.4 147.8C61.4 159.8 64.2 173.5 73.4 182.6L256 365.3L256 480C256 488.5 259.4 496.6 265.4 502.6L329.4 566.6C338.6 575.8 352.3 578.5 364.3 573.5C376.3 568.5 384 556.9 384 544L384 365.3L566.6 182.7C575.8 173.5 578.5 159.8 573.5 147.8C568.5 135.8 556.9 128 544 128L96 128z"/>
            </svg>
            <span>Filtrera</span>
          </button>

        </div>

        

      </form>
    </section>
  );
}