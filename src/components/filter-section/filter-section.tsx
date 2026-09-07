
// Component for the search and filter section of the Kiwi Shop website.
export default function FilterSection()
{
  return (
    <section aria-label="Sök och filtrera produkter" className="filter-section">
      <form>

        <div className="search-group">
          <label htmlFor="search-input"> Sök produkter </label>
          <input id="search-input" type="search" name="query" placeholder="Sök bland produkter..." />
        </div>

        <div className="filter-group">
          <label htmlFor="category-select"> Kategori </label>

          <select id="category-select" name="category" defaultValue="">
            <option value=""> Alla kategorier </option>
            <option value="beauty"> Skönhet </option>
            <option value="fragrances"> Dofter </option>
            <option value="furniture"> Möbler </option>
            <option value="groceries"> Livsmedel </option>
          </select>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="in_stock_only" />
            <span>Endast i lager</span>
          </label>
        </div>

        <div className="sort-group">
          <label htmlFor="sort-select"> Sortera efter </label>

          <select id="sort-select" name="sort" defaultValue="latest">
            <option value="latest"> Senaste </option>
            <option value="price_asc"> Pris: Lågt till högt </option>
            <option value="price_desc"> Pris: Högt till lågt </option>
            <option value="rating_desc"> Högst betyg </option>
          </select>
        </div>

        <div className="submit-group">
          <button type="submit"> <span> Filtrera </span> </button>
        </div>

      </form>
    </section>
  );
}