import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientPartnerList from "../utils/clientPartnerList";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const ClientPartner = () => {
  return (
    <div className="container mb-24 ">
      <h1 className="mb-8 text-xl font-bold text-center text-dark lg:text-xl xl:text-3xl">
        Partners & Clients
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {clientPartnerList.map((clientPartner) => (
            <div key={clientPartner.id}>
              <div className="w-40 ">
                <img
                  src={clientPartner.image}
                  alt={`Partner ${clientPartner.id}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientPartner;
