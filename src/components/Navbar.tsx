import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";

const pages = [
  { link: "/", name: "home" },
  { link: "/recipes", name: "recipes" },
  { link: "/about", name: "about" },
];

function Navbar() {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/recipes")) {
      setSelectedPage(pages[1]);
    } else {
      const currentPage = pages.find((page) => page.link === location.pathname);
      if (currentPage) setSelectedPage(currentPage);
    }
  }, [location.pathname]);

  return (
    <div className={`navbar ${isNavbarOpen ? "--active" : ""}`}>
      <div className="container">
        <Link to={pages[0].link}>
          <div className="logo">
            <img
              src="/coins_icon_white.png"
              alt="logo icon"
              onClick={() => setSelectedPage(pages[0])}
            />
            nutrisave
          </div>
        </Link>
        <Hamburger toggled={isNavbarOpen} toggle={setIsNavbarOpen} />
        <ol>
          {pages.map((page) => (
            <Link
              tabIndex={-1}
              key={page.name}
              to={page.link}
              onClick={() => {
                setSelectedPage(page);
                setIsNavbarOpen(false);
              }}>
              <li className={page === selectedPage ? "active" : ""}>
                {page.name}
                {page === selectedPage ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            </Link>
          ))}
        </ol>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Navbar;
