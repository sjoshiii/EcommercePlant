import React from "react";
import { assets } from './../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-sage rounded-lg overflow-hidden">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-softwhite">
        <div className="text-charcoal px-6 sm:px-10">
          <div className="flex items-center gap-2 mb-2">
            <p className="w-8 md:w-11 h-[2px] bg-forest"></p>
            <p className="font-medium text-sm md:text-base text-forest uppercase">POPULAR COLLECTIONS</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-charcoal">
            Flora of the Week
          </h1>

          <div className="flex items-center gap-2 mt-4">
            <p className="font-semibold text-sm md:text-base text-mint uppercase cursor-pointer hover:text-forest transition">
              EXPLORE PLANTS
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-forest"></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <img src={assets.hero} alt="Hero_img" className="w-full sm:w-1/2 object-cover" />
    </div>
  );
};

export default Hero;
