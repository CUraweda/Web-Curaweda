import Map from "./Map";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div className="container flex justify-center pt-16" id="contact">
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-7 justify-items">
        <Map />
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
