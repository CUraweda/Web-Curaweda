const Video = () => {
  return (
    <div className="container mb-24">
      <h1 className="mb-4 text-xl font-bold text-center text-dark lg:text-xl xl:text-2xl">
        Sekilas tentang <span className="text-primary">Curaweda</span>
      </h1>
      <div className="flex justify-center">
        <video width="60%" height="400" controls>
          <source src="https://youtu.be/5Z7I53jCYCc" type="video/mp4" />{" "}
          {/* Ganti dengan path video */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
