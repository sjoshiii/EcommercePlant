import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsLetterBox";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (form.phone.trim() && !/^\+?[\d\s\-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Phone number is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center">
        {/* Store Info */}
        <div className="flex flex-col justify-center items-start gap-6 md:w-1/2 px-4">
          {/* Optional Image */}
          {/* <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="contact_img" /> */}

          <p className="font-semibold text-xl">Our Garden Store</p>
          <p className="text-gray-500">
            Durbarmarg Road, Green Alley Complex, 13nd Floor <br />
            Kathmandu 44600, Nepal
          </p>
          <p className="text-gray-500">
            Tel: +977 9800000000 <br />
            Email: thegreenilyy@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at The Green Lilyy
          </p>
          <p className="text-gray-500">
            Love plants? Join our mission to bring greenery into every home and
            workspace.
          </p>

          <a href="/careers">
            <button className="border border-black px-8 py-4 rounded text-sm hover:bg-black hover:text-white transition-all duration-500">
              View Open Roles
            </button>
          </a>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 px-4">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block mb-1 font-medium" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message Here"
                value={form.message}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded active:bg-gray-700 hover:bg-[rgb(198,196,196)] hover:text-black hover:border hover:border-black transition"
            >
              Send Message
            </button>

            {submitted && (
              <p
                className="text-green-600 mt-4 text-center"
                role="alert"
                aria-live="polite"
              >
                Thank you! We have received your message.
              </p>
            )}
          </form>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
