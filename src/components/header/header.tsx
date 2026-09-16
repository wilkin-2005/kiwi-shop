
import Link from "next/link";
import styles from "./header.module.css";
// import KiwiBirdIcon from "../kiwi-bird-icon/kiwi-bird-icon";


// Header component for the Kiwi Shop website. It includes navigation links and a cart action.
export default function Header()
{
  return (
    <header className={styles.header}>
      <nav aria-label="Huvudnavigation" className={styles.nav}>

        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink} >
            <span role="img" aria-label="Kiwi-fågel" className={styles.brandIcon}>
              🥝/🐦
              {/* <KiwiBirdIcon /> */}
            </span>

            <span className={styles.brandText}> Kiwi Shop </span>
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink} > Hem </Link>
          </li>

          <li>
            <Link href="/#catalogue" className={styles.navLink} > Katalog </Link>
          </li>

          <li>
            <Link href="/about" className={styles.navLink} > Om oss </Link>
          </li>
        </ul>

        <div className={styles.cartAction}>
          <Link href="/cart" aria-label="Varukorg med 0 produkter" className={styles.cartButton}>
            <span>Varukorg</span>
            <span className={styles.cartBadge}>0</span>
          </Link>
        </div>

      </nav>
    </header>
  );
}