import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="container flex flex-col-reverse mb-24 lg:grid lg:grid-cols-2 lg:gap-16"
      id="hero"
    >
      {/* text */}
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-2xl font-extrabold text-center text-dark lg:text-left ">
          The Game Changer of ERP
        </h1>
        <p className="mb-8 text-lg text-center lg:text-justify text-dark2 lg:text-xl">
          Curaweda optimize processes, reducing human errors and coordination
          lines. Our modular algorithms offer a cost-effectives and precice ERP
          solution, providing a competitive edge globally
        </p>
        <div className="flex justify-center lg:justify-start">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg w-fit bg-primary hover:bg-secondary"
          >
            Get started
          </a>
        </div>
      </div>
      {/* image */}
      <div className="flex justify-center px-10 ">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
