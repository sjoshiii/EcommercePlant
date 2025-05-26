import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center font-outfit">
      <p className="text-2xl font-medium text-forest">
        Get 20% off your first plant order
      </p>

      <p className="text-2xl font-medium text-charcoal mt-2">
        Sign up for plant care tips, new arrivals, and exclusive green deals.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-sage pl-3 rounded-md"
      >
        <input
          className="w-full sm:flex-1 outline-none text-charcoal placeholder-charcoal/50 bg-transparent"
          type="email"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="
            bg-forest text-softwhite text-xs px-10 py-4 rounded-r-md active:bg-mint
            hover:bg-mint hover:text-forest hover:border hover:border-forest
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
