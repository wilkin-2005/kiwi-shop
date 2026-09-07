import Link from "next/link";

// Header component for the Kiwi Shop website. It includes navigation links and a cart action.
export default function Header()
{
  return (
    <header>
      <nav aria-label="Huvudnavigation">

        <div className="brand">
          <Link href="/">
            <span role="img" aria-label="Kiwi-fågel"> 🥝/🐦 </span>
            <span>Kiwi Shop</span>
          </Link>
        </div>

        <ul className="nav-links">
          <li> <Link href="/"> Hem </Link> </li>
          <li> <Link href="#catalogue"> Katalog </Link> </li>
          <li> <Link href="/about"> Om oss </Link> </li>
        </ul>

        <div className="cart-action">
          <Link href="/cart" aria-label="Varukorg med 0 produkter">
            <span>Varukorg</span>
            <span className="cart-badge">0</span>
          </Link>
        </div>

      </nav>
    </header>
  );
}