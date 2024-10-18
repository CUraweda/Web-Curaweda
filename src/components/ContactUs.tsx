import Map from "./Map";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div className="container flex justify-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 items-center mb-24 justify-items">
        <Form />
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
