import logo from "../assets/logo2.png";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 p-3 lg:grid-cols-3">
          {/* logo */}
          <div className="flex flex-col w-40 m-1 mb-4 text-2xl font-bold xl:w-52">
            <img src={logo} alt="Logo" />
            {/* <h1>PT. Curaweda Palagan Innotech</h1> */}
          </div>
          {/* location */}
          <div className="mb-4">
            <h3 className="m-1 text-lg font-bold">Our Office</h3>
            <p className="m-1 text-sm text-dark">
              Locus Work Jl. Taman Pramuka No.157, Cihapit, Kec. Bandung Wetan,
              Kota Bandung, Jawa Barat
            </p>
            <p className="m-1 text-sm text-dark">
              Jl. Atletik X No.1, Sukamisikin, Kec. Arcamani, Kota Bandung, Jawa
              Barat
            </p>
          </div>
          {/* contact */}
          <div className="mb-4 lg:ml-16">
            <h3 className="m-1 text-lg font-bold">Contact</h3>
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
        <p className="mt-4 text-center text-dark">
          Copyright © 2024 Curaweda. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
