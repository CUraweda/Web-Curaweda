import { Label, Textarea, TextInput } from "flowbite-react";

const Form = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="mb-4 text-lg font-bold text-center text-dark lg:text-xl xl:text-3xl">
        Have Questions? We'd love to help!
      </h1>
      <div className="flex items-center flex-col">
        <form className="w-full">
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id="name"
              placeholder="Enter your name"
              type="text"
              required
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
