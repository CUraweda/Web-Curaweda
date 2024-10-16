import { Navbar } from "flowbite-react";
import logo from "../assets/logo2.png";

const NavBar = () => {
  return (
    <div className="container sticky top-0 z-50 ">
      <Navbar fluid rounded className="md:py-3">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-7 xl:h-10" alt="logo-curaweda" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="navbar-link">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="navbar-link">
            Product
          </Navbar.Link>
          <Navbar.Link href="#" className="navbar-link">
            USP
          </Navbar.Link>
          <Navbar.Link href="#" className="navbar-link">
            Portofolio
          </Navbar.Link>
          <Navbar.Link href="#" className="navbar-link">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
