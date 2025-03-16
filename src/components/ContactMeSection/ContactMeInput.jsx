// service_eqj4r88

// Gy-IEp1UBL6EsGNL0

//template_24xcgbq

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import Loading from "./Loading.jsx";

const ContactMeInput = () => {
  const [form, setForm] = useState({
    sender_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState("submit");
  const formRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading("loading");

    emailjs
      .send(
        "service_eqj4r88",
        "template_43tebbc",
        {
          from_name: form.sender_name,
          to_name: "Kaushiki",
          from_email: form.email,
          to_email: "kaushikigupta.1127@gmail.com",
          message: form.message,
        },
        "Gy-IEp1UBL6EsGNL0"
      )
      .then(
        () => {
          setLoading("submit");
          setForm({
            sender_name: "",
            email: "",
            message: "",
          });
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          console.error(error);
          setLoading("submit");
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col p-3 gap-4 sm:gap-3 xs:gap-2 h-full justify-center mx-auto md:text-left sm:text-center w-[90%] lg:p-25 md:p-10">
      <input
        type="text"
        placeholder="Name"
        name="sender_name"
        aria-label="Enter your name"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[50px] sm:h-[45px] xs:h-[40px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
        value={form.sender_name}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Enter your email"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[50px] sm:h-[45px] xs:h-[40px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
        value={form.email}
      />

      <textarea
        name="message"
        placeholder="Message"
        aria-label="Enter your message"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[160px] sm:h-[120px] xs:h-[100px] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
        value={form.message}
      />

<button
  className="bg-blue-600 hover:scale-105 transition-all duration-300 text-white font-bold py-3 px-4 sm:h-[50px] xs:h-[50px] rounded-md cursor-pointer flex items-end justify-center min-w-[120px]"
  onClick={sendEmail}
  ref={formRef}
>
  {loading === "loading" ? (
    <div className="flex justify-center items-center">
      <Loading />
    </div>
  ) : (
    "Submit"
  )}
</button>

    </div>
  );
};

export default ContactMeInput;
