import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Get 20% off your first plant order
      </p>

      <p className="text-2xl font-medium text-gray-800">
        Sign up for plant care tips, new arrivals, and exclusive green deals.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-md"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="
    bg-black text-white text-xs px-10 py-4 rounded-r-md active:bg-gray-700
    hover:bg-[rgb(198,196,196)] hover:text-black 
    hover:border hover:border-black
    transition
  "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
