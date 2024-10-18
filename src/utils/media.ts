import media1 from "../assets/media/1.png";
import media2 from "../assets/media/2.png";
import media3 from "../assets/media/3.png";
import media4 from "../assets/media/4.png";

type media = {
  id: number;
  image: string;
};

const mediaList: media[] = [
  {
    id: 1,
    image: media1,
  },
  {
    id: 2,
    image: media2,
  },
  {
    id: 3,
    image: media3,
  },
  {
    id: 4,
    image: media4,
  },
];

export default mediaList;
