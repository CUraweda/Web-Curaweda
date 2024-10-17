import partner1 from "../assets/partner/1.png";
import partner2 from "../assets/partner/2.png";
import partner3 from "../assets/partner/3.png";

type ClientPartner = {
  id: number;
  image: string;
};

const clientPartnerList: ClientPartner[] = [
  {
    id: 1,
    image: partner1,
  },
  {
    id: 2,
    image: partner2,
  },
  {
    id: 3,
    image: partner3,
  },
  {
    id: 4,
    image: partner1,
  },
  {
    id: 5,
    image: partner2,
  },
  {
    id: 6,
    image: partner3,
  },
];

export default clientPartnerList;
