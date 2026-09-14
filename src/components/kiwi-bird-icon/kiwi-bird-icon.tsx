
import "./kiwi-bird-icon.css";

//
export default function KiwiBirdIcon()
{
    {/* !Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
    {/* <svg className={styles.kiwiSvg} width="200" height="150" fill="none"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path d="M323.2 452.4C354.4 433.6 387.9 416 424.3 416L480 416C484.6 416 489.1 415.8 493.6 415.3L578.9 537.2C582.9 542.9 590.2 545.4 596.8 543.3C603.4 541.2 608 535 608 528L608 288C608 217.3 550.7 160 480 160L424.3 160C387.9 160 354.4 142.4 323.2 123.6C294.3 106.1 260.3 96 224 96C118 96 32 182 32 288C32 359.1 70.6 421.1 128 454.3L128 520C128 533.3 138.7 544 152 544C165.3 544 176 533.3 176 520L176 474C191.3 477.9 207.4 480 224 480C229.4 480 234.7 479.8 240 479.3L240 520C240 533.3 250.7 544 264 544C277.3 544 288 533.3 288 520L288 469.1C300.4 464.7 312.2 459.1 323.2 452.4zM480 264C493.3 264 504 274.7 504 288C504 301.3 493.3 312 480 312C466.7 312 456 301.3 456 288C456 274.7 466.7 264 480 264z"/>
    </svg> */}


    {/* SVG/Grafisk illustration av en Kiwi-fågel */}
    return(
    <svg
        className="kiwi-svg"
        width="200"
        height="150"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <ellipse cx="120" cy="85" rx="45" ry="35" className="prim-accent fill-clr" fill="oklch(0.51 0.22 275)" opacity="0.15" />
        <circle cx="80" cy="65" r="22" className="prim-accent fill-clr" fill="oklch(0.51 0.22 275)" opacity="0.25" />
        <path
            d="M60 70 C40 80, 25 105, 20 120"
            className="prim-accent stroke-clr"
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
            className="prim-accent stroke-clr"
            stroke="oklch(0.51 0.22 275)"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <line
            x1="130"
            y1="120"
            x2="135"
            y2="140"
            className="prim-accent stroke-clr"
            stroke="oklch(0.51 0.22 275)"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
    );
}