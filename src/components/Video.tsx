const Video = () => {
  return (
    <div className="container mb-24">
      <h1 className="mb-4 text-xl font-bold text-center text-dark lg:text-xl xl:text-2xl">
        Sekilas tentang <span className="text-primary">Curaweda</span>
      </h1>
      <div className="flex justify-center">
        <iframe
          className="w-full h-48 md:w-3/4 md:h-64 lg:w-2/3 lg:h-96"
          src="https://www.youtube.com/embed/5Z7I53jCYCc"
          title="Sekilas tentang Curaweda"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
