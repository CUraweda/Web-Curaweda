import Slider from "react-slick";
import portofolioList from "../utils/portofolio";

const Portofolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container pt-16 mb-24" id="portofolio">
      <h1 className="mb-8 text-xl font-bold text-center text-dark lg:text-xl xl:text-3xl">
        Our Portofolio
      </h1>
      <Slider {...settings}>
        {portofolioList.map((portofolio) => (
          <div key={portofolio.id} className="w-full px-3 mb-5">
            <div className="flex justify-center mb-3">
              <h3 className="w-3/5 py-2 text-center text-white border rounded-lg bg-primary">
                {portofolio.title}
              </h3>
            </div>

            <div className="flex items-center justify-center p-3 py-10 transition-all border border-black hover:scale-105 max-h-fit rounded-xl">
              <img
                className=" rounded-xl"
                src={portofolio.image}
                alt={portofolio.title}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portofolio;
