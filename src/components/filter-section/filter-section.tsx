import styles from "./filter-section.module.css";

// Component for the search and filter section of the Kiwi Shop website.
export default function FilterSection() {
  return (
    <section aria-label="Sök och filtrera produkter" className={styles.filterSection}>
      <form className={styles.form}>

        <div className={styles.searchGroup}>
          <label htmlFor="search-input" className={styles.label}>
            Sök produkter
          </label>
          <input
            id="search-input"
            type="search"
            name="query"
            placeholder="Sök bland produkter..."
            className={styles.input}
          />
        </div>

        <div className={styles.controlsRow}>

          <div className={styles.filterGroup}>
            <label htmlFor="category-select" className={styles.label}> Kategori </label>

            <select id="category-select" name="category" defaultValue="" className={styles.select}>
              <option value="">Alla kategorier</option>
              <option value="beauty">Skönhet</option>
              <option value="fragrances">Dofter</option>
              <option value="furniture">Möbler</option>
              <option value="groceries">Livsmedel</option>
            </select>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="in_stock_only" className={styles.checkbox} />
              <span>Endast i lager</span>
            </label>
          </div>

          <div className={styles.sortGroup}>
            <label htmlFor="sort-select" className={styles.label}> Sortera efter </label>

            <select id="sort-select" name="sort" className={styles.select} defaultValue="latest" >
              <option value="latest"> Senaste </option>
              <option value="price_asc"> Pris: Lågt till högt </option>
              <option value="price_desc"> Pris: Högt till lågt </option>
              <option value="rating_desc"> Högst betyg </option>
            </select>
          </div>

        </div>

        <div className={styles.submitGroup}>
          <button type="submit" className={styles.submitButton}>
            <svg
              className={styles.filterIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                clipRule="evenodd"
              />
            </svg>
            <span>Filtrera</span>
          </button>
        </div>

      </form>
    </section>
  );
}