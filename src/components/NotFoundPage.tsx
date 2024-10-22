import { Link } from "react-router-dom";
import TransitionOverlay from "./TransitionOverlay";

export function NotFoundPage() {
  return (
    <div className="section not-found">
      <h2 className="section-title">
        404 <br /> Page not found
        <br />
        <Link to="/">
          <span className="home">Home</span>
        </Link>
      </h2>

      <TransitionOverlay />
    </div>
  );
}
