import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="font-outfit text-charcoal px-4 sm:px-8 md:px-16">
      {/* Section Title */}
      <div className="text-2xl text-center pt-8 border-t border-sage">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About content */}
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-charcoal/70 font-outfit">
        At Botanepal, we believe that plants bring life, calm, and beauty
        to every space. Our mission is to connect people with nature through a
        curated selection of indoor and outdoor plants, accessories, and expert
        care advice.<br />
        <br />
         Whether you’re a seasoned plant parent or just starting
        your green journey, our collections are designed to inspire, educate,
        and bring greenery into your daily life — one leaf at a time.
      </p>

      {/* Why Choose Us Section */}
      <div className="text-2xl py-6 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-20">
        <div className="border border-sage rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-softwhite shadow-sm">
          <b className="text-forest">Healthy Plants Guarantee:</b>
          <p className="text-charcoal/80">
            We carefully select and nurture every plant to ensure you receive
            vibrant, healthy greenery that will thrive in your home or garden.
          </p>
        </div>

        <div className="border border-sage rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-softwhite shadow-sm">
          <b className="text-forest">Expert Guidance:</b>
          <p className="text-charcoal/80">
            From care instructions to plant styling tips, our team is here to
            support you every step of the way in your plant journey.
          </p>
        </div>

        <div className="border border-sage rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-softwhite shadow-sm">
          <b className="text-forest">Customer Satisfaction:</b>
          <p className="text-charcoal/80">
            We value your happiness and strive to provide excellent service,
            fast shipping, and a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Newsletter Subscription Box */}
      <NewsLetterBox />
    </div>
  );
};

export default About;
