import { Link } from "react-router-dom";

import "./navigation.css";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="nav-left">
          <Link to="/home" className="nav-links">
            Strinx Studio
          </Link>
        </div>

        <div className="nav-mid">
          <Link to="/work" className="nav-links">
            Work
          </Link>
          <Link to="/services" className="nav-links">
            Services
          </Link>
          <Link to="/contact" className="nav-links">
            Contact
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/register" className="nav-links">
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
