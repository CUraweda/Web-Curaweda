import image1 from "../assets/usp/1.png";
import image2 from "../assets/usp/2.png";
import image3 from "../assets/usp/3.png";
import image4 from "../assets/usp/4.png";

type usp = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const uspList: usp[] = [
  {
    id: 1,
    image: image1,
    title: "Easy App!",
    description:
      "We provide fast and light weight web - based apps. But worry free, if you want to upgrade to mobile apps, we’ll be more than happy to provide it!",
  },
  {
    id: 2,
    image: image2,
    title: "Different? Get Customize!",
    description:
      "Got unique process? No apps suit your needs? Its time to work on custom apps! Worry not, we could make anything you need!",
  },
  {
    id: 3,
    image: image3,
    title: "Functions Worth Value? We Got You!",
    description:
      "Price worth the function? Of course! We provide the sweetest deal for your company. We prioritize function and quality over anything else.",
  },
  {
    id: 4,
    image: image4,
    title: "No Open Source, All Original!",
    description:
      "You might be wondering why there’s lots of similar apps out there? Guess what? We’re not! We create all logics and coding 100% genuine. Cleaner, and focus!",
  },
];

export default uspList;
