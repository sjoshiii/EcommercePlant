import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base font-outfit text-charcoal">
      <div>
        <img
          src={assets.exchange_icon}
          alt="Flexible Plant Exchange icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-forest">Flexible Plant Exchange</p>
        <p className="text-charcoal/60">
          Easily swap plants within 7 days if it’s not the right fit.
        </p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          alt="Healthy Plant Guarantee icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-forest">Healthy Plant Guarantee</p>
        <p className="text-charcoal/60">
          All plants are shipped healthy & ready to thrive — or we’ll make it right.
        </p>
      </div>

      <div>
        <img
          src={assets.support_img}
          alt="Garden Support icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-forest">Garden Support</p>
        <p className="text-charcoal/60">
          Need help? Get expert plant care tips any time you need.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
