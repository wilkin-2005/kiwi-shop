
// Pagination component for the Kiwi Shop website.
export default function Pagination()
{
  return (
    <nav aria-label="Paginering av produkter" className="pagination-nav">
      
      <ul className="pagination-list">
        <li> <button type="button" disabled aria-label="Föregående sida"> &lt; </button> </li>
        
        <li> <button type="button" aria-current="page"> 1 </button> </li>

        <li> <button type="button">2</button> </li>
        
        <li> <button type="button">3</button> </li>

        <li aria-hidden="true"> <span>...</span> </li>

        <li> <button type="button">25</button> </li>

        <li> <button type="button" aria-label="Nästa sida"> &gt; </button> </li>
      </ul>

    </nav>
  );
}