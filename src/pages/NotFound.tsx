import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="wrap py-28">
      <p className="kicker">404</p>
      <h1 className="display mt-4 text-5xl md:text-7xl">This page is not in the clinic.</h1>
      <p className="mt-4 max-w-md text-muted">The address may have moved. The clinic has not — Flat 46, Pocket G, Sarita Vihar.</p>
      <div className="mt-8 flex gap-3">
        <Link to="/" className="btn btn-ink">Home</Link>
        <Link to="/appointment" className="btn btn-copper">Book a visit</Link>
      </div>
    </section>
  );
}
