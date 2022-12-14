import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="nav">
      <div className="leftSide">
        <Link to="/">
          <a>
            <img src="/images/logo.png" alt="Be Aware Everywhere logo" />
          </a>
        </Link>
      </div>
      <div className="rightSide">
        <ul id={showLinks ? "hidden" : ""}>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/data">Crime Reports</CustomLink>
          </li>
          <li>
            <CustomLink to="/safety">Travel Tips</CustomLink>
          </li>
          <li>
            <CustomLink to="/report">Report a Crime</CustomLink>
          </li>
        </ul>
        <button
          className="hamburgerbutton"
          onClick={() => setShowLinks(!showLinks)}
        >
          <div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default NavBar;
