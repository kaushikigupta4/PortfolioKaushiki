import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import Loading from "./Loading.jsx";

const COLORS = {
  pink: "#F6B1CE",
  blue: "#1581BF",
  teal: "#3DB6B1",
  mint: "#CCE5CF",
  text: "#0B1220",
};

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
          alert("Thank you. I will get back to you soon!");
        },
        (error) => {
          console.error(error);
          setLoading("submit");
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="
        flex flex-col p-6 gap-5 w-[90%] mx-auto 
        rounded-2xl backdrop-blur-xl shadow-lg
        border border-white/40 transition-all duration-300
      "
      style={{
        background: "rgba(246, 177, 206, 0.25)", // pink glass
        boxShadow: "0 8px 30px rgba(246, 177, 206, 0.35)", // soft pink glow
      }}
    >

      {/* NAME */}
      <input
        type="text"
        placeholder="Name"
        name="sender_name"
        aria-label="Enter your name"
        className="
          w-full p-3 rounded-xl text-black bg-white/60 
          shadow-sm focus:outline-none
          focus:ring-2 focus:ring-[#F6B1CE]
          placeholder-gray-500 transition-all duration-300
          hover:scale-[1.02] hover:shadow-md
        "
        onChange={handleChange}
        value={form.sender_name}
      />

      {/* EMAIL */}
      <input
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Enter your email"
        className="
          w-full p-3 rounded-xl text-black bg-white/60 
          shadow-sm focus:outline-none
          focus:ring-2 focus:ring-[#F6B1CE]
          placeholder-gray-500 transition-all duration-300
          hover:scale-[1.02] hover:shadow-md
        "
        onChange={handleChange}
        value={form.email}
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Message"
        aria-label="Enter your message"
        className="
          w-full p-3 rounded-xl text-black bg-white/60 
          h-[150px] resize-none shadow-sm
          focus:outline-none focus:ring-2 focus:ring-[#F6B1CE]
          placeholder-gray-500 transition-all duration-300
          hover:scale-[1.02] hover:shadow-md
        "
        onChange={handleChange}
        value={form.message}
      />

      {/* SUBMIT BUTTON */}
      <button
        className="
          font-bold py-3 rounded-xl text-white 
          transition-all duration-300 cursor-pointer backdrop-blur-xl 
          hover:scale-[1.05] hover:-translate-y-[2px]
        "
        style={{
          background: "rgba(61, 182, 177, 0.35)", // teal glass
          boxShadow: "0 8px 25px rgba(61, 182, 177, 0.35)",
          border: "1px solid rgba(61, 182, 177, 0.45)",
        }}
        onClick={sendEmail}
        ref={formRef}
      >
        {loading === "loading" ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </div>
  );
};

export default ContactMeInput;
