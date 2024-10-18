import mediaList from "../utils/media";

const Media = () => {
  return (
    <div className="container mb-24">
      <h1 className="mb-4 text-xl font-bold text-center text-dark lg:text-xl xl:text-3xl">
        As Seen On Media
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-x-10 lg:grid-cols-4 w-fit">
          {mediaList.map((media) => (
            <div key={media.id} className="flex justify-center w-40 ">
              <img src={media.image} alt={`Media ${media.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
