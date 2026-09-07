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
        {/* SVG/Grafisk illustration av en Kiwi-fågel */}
        <svg
          className={styles.kiwiSvg}
          width="200"
          height="150"
          viewBox="0 0 200 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="120" cy="85" rx="45" ry="35" fill="oklch(0.51 0.22 275)" opacity="0.15" />
          <circle cx="80" cy="65" r="22" fill="oklch(0.51 0.22 275)" opacity="0.25" />
          <path
            d="M60 70 C40 80, 25 105, 20 120"
            stroke="oklch(0.51 0.22 275)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="75" cy="60" r="3" fill="oklch(0.2 0.015 260)" />
          <line
            x1="110"
            y1="120"
            x2="105"
            y2="140"
            stroke="oklch(0.51 0.22 275)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="130"
            y1="120"
            x2="135"
            y2="140"
            stroke="oklch(0.51 0.22 275)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}