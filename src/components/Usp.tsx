import image1 from "../assets/usp/1.png";
import image2 from "../assets/usp/2.png";
import image3 from "../assets/usp/3.png";
import image4 from "../assets/usp/4.png";

const UspList = [
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

const Usp = () => {
  return (
    <div className="container pt-16 pb-24 mb-24 bg-blue">
      <h1 className="text-xl font-bold text-center mb-14 text-dark lg:text-xl xl:text-2xl">
        USP
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {UspList.map((usp) => (
          <div key={usp.id} className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex justify-center border-4 rounded-2xl min-w-28 border-primary">
                <img src={usp.image} alt={usp.title} className="w-20" />
              </div>
              <h2 className="mb-2 text-xl font-bold">{usp.title}</h2>
            </div>
            <p className="text-justify text-dark">{usp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
