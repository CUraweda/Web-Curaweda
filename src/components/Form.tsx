import { Label, Textarea, TextInput } from "flowbite-react";

const Form = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="mb-4 text-xl font-bold text-center text-dark lg:text-xl xl:text-3xl">
        Have Questions? We'd love to help!
      </h1>
      <form className="w-1/2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" type="text" placeholder="" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput id="email" type="email" placeholder="" required />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
