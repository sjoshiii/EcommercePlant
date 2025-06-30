import React from "react";

const Footer = () => {
  return (
    <div className="bg-beige text-charcoal font-outfit">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <p className="text-xl font-semibold mb-5 text-forest">Botanepal</p>
          <p className="w-full md:w-2/3 text-charcoal/70">
            At Botanepal, we’re rooted in the love for nature — delivering beautiful, healthy plants and sustainable greenery to your doorstep.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-forest">COMPANY</p>
          <ul className="flex flex-col gap-1 text-charcoal/70">
            <li className="hover:text-mint cursor-pointer transition">Home</li>
            <li className="hover:text-mint cursor-pointer transition">About Us</li>
            <li className="hover:text-mint cursor-pointer transition">Shipping Info</li>
            <li className="hover:text-mint cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-forest">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-charcoal/70">
            <li>+977 9800000000</li>
            <li>botanepal@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-charcoal/20" />
        <p className="py-5 text-sm text-center text-charcoal/60">
          &copy; 2025 Botanepal. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
