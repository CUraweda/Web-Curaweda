const Map = () => {
  return (
    <div className="container ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.775789901933!2d107.66648937736707!3d-6.9173872752451135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd3eba6a5df3%3A0x56f3e94357bbdf95!2sPT%20Curaweda%20Palagan%20Innotech!5e0!3m2!1sen!2sus!4v1729169867762!5m2!1sen!2sus"
        width="300"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=""
      ></iframe>
    </div>
  );
};

export default Map;
