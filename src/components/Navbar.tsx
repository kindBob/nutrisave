import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

const pages = [
  {
    link: "/",
    name: "home",
  },
  {
    link: "/recipes",
    name: "recipes",
  },
  {
    link: "/about",
    name: "about",
  },
];

function Navbar() {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const currentPage = pages.find((page) => page.link === location.pathname);
    if (currentPage) setSelectedPage(currentPage);
  }, []);

  useEffect(() => {
    // Handle body overflow based on the navbar's open state
    document.body.style.overflowY = isNavbarOpen ? "hidden" : "auto";
    document.documentElement.style.overflowY = isNavbarOpen ? "hidden" : "auto";

    return () => {
      // Clean up in case component unmounts
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    };
  }, [isNavbarOpen]);

  return (
    <div className={`navbar ${isNavbarOpen ? "--active" : ""}`}>
      <div className="container">
        <div className="logo">
          <img src="coins_icon_white.png" alt="logo icon" />
          nutrisave
        </div>
        <Hamburger toggled={isNavbarOpen} toggle={setNavbarOpen} />
        <ol>
          {pages.map((page) => (
            <Link key={page.name} to={page.link} onClick={() => setSelectedPage(page)}>
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
