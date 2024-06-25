import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzggnad");
  if (state.succeeded) {
    return (
      <p className="text-3xl font-bold text-center py-40">
        Thanks for joining!
      </p>
    );
  }

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <span>Please Fill Out The Below Form To Contact me</span>

        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-200 w-96 px-8 py-6 rounded-lg"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            <div className="flex flex-col">
              <label className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="block text-gray-700 font-bold mb-2">
                Message
              </label>

              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Enter Your Name"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <br />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-black text-white rounded px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
