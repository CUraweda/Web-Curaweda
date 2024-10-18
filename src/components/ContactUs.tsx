import Map from "./Map";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div className="flex justify-center border border-black">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-24 justify-items">
        <Form />
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
