import porto from "../assets/portofolio/porto.png";

type Portofolio = {
  id: number;
  title: string;
  image: string;
};

const portofolioList: Portofolio[] = [
  {
    id: 1,
    title: "Contractor & Developer",
    image: porto,
  },
  {
    id: 2,
    title: "School & University",
    image: porto,
  },
  {
    id: 3,
    title: "Logistic Industries",
    image: porto,
  },
  {
    id: 4,
    title: "Hotel Management",
    image: porto,
  },
  {
    id: 5,
    title: "Manufacturing Industries",
    image: porto,
  },
  {
    id: 6,
    title: "Outsourcing Company",
    image: porto,
  },
  {
    id: 7,
    title: "Human Resources",
    image: porto,
  },
  {
    id: 8,
    title: "Finance Accounting",
    image: porto,
  },
];

export default portofolioList;
