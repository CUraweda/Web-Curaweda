import uspList from "../utils/uspList";

const Usp = () => {
  return (
    <div className="container pt-16 pb-24 mb-24" id="usp">
      <h1 className="text-xl font-bold text-center mb-14 text-dark lg:text-xl xl:text-3xl">
        USP
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {uspList.map((usp) => (
          <div
            key={usp.id}
            className="p-6 transition-all bg-white border border-gray-300 rounded-lg shadow-lg hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="flex justify-center border-4 rounded-2xl min-w-28 bg-primary border-primary">
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
