
"use client";

import "./error.css";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Next.js Error Boundary for the home-page route segment.
// Shown when ProductCatalogueGrid (or any other async Server Component in this
// segment) throws an unhandled error — for example when the Product API is down.
export default function ErrorPage( { error, reset }: ErrorPageProps )
{
  return (
    <main className="error-page">
      <div className="error-card">
        <h1 className="error-title"> Något gick fel </h1>

        <p className="error-description">
          Vi kunde inte ladda produkterna just nu. Kontrollera att du har en aktiv anslutning och försök igen.
        </p>

        { error.digest && (
          <p className="error-digest"> Felkod: {error.digest} </p>
        )}

        <button type="button" className="error-retry-button" onClick={reset}> Försök igen </button>
      </div>
    </main>
  );
}