
import "./footer.css";


// Footer component for the Kiwi Shop website
export default function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-text"> &copy; 2026 Kiwi Shop. Skolprojekt byggt med Next.js. </p>
        {/* {new Date().getFullYear()} */}
      </div>
    </footer>
  );
}