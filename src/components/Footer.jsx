import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <p className="text-xl font-medium mb-5">THE GREEN LILYY</p>
          <p className="w-full md:w-2/3 text-gray-600">
            At THE GREEN LILYY, we’re rooted in the love for nature — delivering beautiful, healthy plants and sustainable greenery to your doorstep.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Shipping Info</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977 9800000000</li>
            <li>thegreenlilyy@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">&copy; 2025 THE GREEN LILYY. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
