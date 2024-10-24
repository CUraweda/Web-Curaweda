import { Navbar } from "flowbite-react";
import logo from "../assets/logo2.png";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container sticky top-0 bg-white z-50 transition-shadow ${
        hasShadow ? "shadow-lg" : ""
      }`}
    >
      <Navbar fluid rounded className="md:py-3">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="h-8 mr-3 xl:h-10" alt="logo-curaweda" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#hero" active className="navbar-link">
            Home
          </Navbar.Link>
          <Navbar.Link href="#usp" className="navbar-link">
            USP
          </Navbar.Link>
          <Navbar.Link href="#portofolio" className="navbar-link">
            Portofolio
          </Navbar.Link>
          <Navbar.Link href="#client-partner" className="navbar-link">
            Client & Partner
          </Navbar.Link>
          <Navbar.Link href="#contact" className="navbar-link">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
