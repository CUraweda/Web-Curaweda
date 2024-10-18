import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Define a type for the contact items
interface ContactItem {
  id: number;
  icon: typeof FaInstagram;
  text: string;
}

const contact: ContactItem[] = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    text: "+62 878-2277-8786",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    text: "locuswork",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    text: "locuswork",
  },
  {
    id: 4,
    icon: <SiGmail />,
    text: "locuswork",
  },
];

export default contact;
