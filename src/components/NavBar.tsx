import { Navbar } from "flowbite-react";
import logo from "../assets/logo2.png";

const NavBar = () => {
  return (
    <div className="container sticky top-0 z-50">
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
