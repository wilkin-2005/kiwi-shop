import KiwiBirdIcon from "../kiwi-bird-icon/kiwi-bird-icon";
import styles from "./hero-section.module.css";

// HeroSection component for the Kiwi Shop website. It serves as the introductory section with a welcoming message and a call-to-action button.
export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 id="hero-title" className={styles.title}>
          Välkommen till Kiwi Shop
        </h1>
        <p className={styles.description}>
          Utforska vårt breda sortiment av produkter inspirerade av Kiwi-fågelns hemtrakter och
          globala favoriter.
        </p>
        <a href="#catalogue" className={styles.ctaButton}>
          Utforska sortimentet
        </a>
      </div>

      <div className={styles.heroGraphic} aria-hidden="true">
        <KiwiBirdIcon />
      </div>
    </section>
  );
}