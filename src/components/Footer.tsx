import logo from "../assets/logo2.png";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" py-6 bg-gray-100">
      <div className="container">
        <div className=" grid grid-cols-1 lg:grid-cols-3  p-3">
          {/* logo */}
          <div className="w-40 xl:w-52 flex flex-col text-2xl font-bold mb-4 m-1">
            <img src={logo} alt="Logo" />
            {/* <h1>PT. Curaweda Palagan Innotech</h1> */}
          </div>
          {/* location */}
          <div className="mb-4">
            <h3 className="text-lg font-bold m-1">Our Office</h3>
            <p className="text-sm text-dark m-1">
              Locus Work Jl. Taman Pramuka No.157, Cihapit, Kec. Bandung Wetan,
              Kota Bandung, Jawa Barat
            </p>
            <p className="text-sm text-dark m-1">
              Jl. Atletik X No.1, Sukamisikin, Kec. Arcamani, Kota Bandung, Jawa
              Barat
            </p>
          </div>
          {/* contact */}
          <div className="mb-4 lg:ml-16">
            <h3 className="text-lg font-bold m-1">Contact</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center m-1">
                <span>
                  <FaPhoneAlt />
                </span>
                <span className="ml-2 text-sm text-dark">
                  +62 878-2277-8786
                </span>
              </div>
              <div className="flex items-center m-1">
                <span>
                  <SiGmail />
                </span>
                <span className="ml-2 text-sm text-dark">
                  info@curaweda.com
                </span>
              </div>
              <div className="flex items-center m-1">
                <span>
                  <FaInstagram />
                </span>
                <span className="ml-2 text-sm text-dark">Curaweda</span>
              </div>
              <div className="flex items-center m-1">
                <span>
                  <FaLinkedin />
                </span>
                <span className="ml-2 text-sm text-dark">Curaweda</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-black" />
        <p className="text-center text-dark mt-4">
          Copyright © 2024 Curaweda. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
