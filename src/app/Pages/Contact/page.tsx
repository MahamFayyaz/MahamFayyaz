import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
          <h1 className="text-5xl font-bold  text-center">Contact Me.</h1>
          <p className="text-xl font-bold text-gray-800 text-center">
           Let us talk and collaborate
          </p>

      <div className=" p-4 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold text-xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold text-xl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold text-xl" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded p-2 h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
