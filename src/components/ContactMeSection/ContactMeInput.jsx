// service_eqj4r88

// Gy-IEp1UBL6EsGNL0

//template_24xcgbq

import emailjs from '@emailjs/browser';
import { useState,useRef } from "react";
const ContactMeInput = () => {
  const[form, setForm]=useState({
    sender_name:"", email:"", message:""
  })
  const formRef = useRef();

  const handleChange=(e)=>{
    e.preventDefault();
    const {name, value}=e.target;
    setForm({...form, [name]:value});
    console.log(form)
  
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
       'service_eqj4r88',
       'template_43tebbc',
        {
          from_name: form.name,
          to_name: "Kaushiki",
          from_email: form.email,
          to_email: "kaushikigupta.1127@gmail.com",
          message: form.message,
        },
        'Gy-IEp1UBL6EsGNL0'
      )
      .then(
        () => {
         
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
         
          console.error(error);

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
        value={form.value}
      />
      
   
      <input 
      name="email"
        type="email" 
        placeholder="Email" 
        aria-label="Enter your email"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[50px] sm:h-[45px] xs:h-[40px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
        value={form.value}
      />


      <textarea 
        name="message"
        placeholder="Message" 
        aria-label="Enter your message"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[160px] sm:h-[120px] xs:h-[100px] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
        value={form.value}
      />

    
      <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-bold py-2 px-4 h-[50px] sm:h-[45px] xs:h-[40px] rounded-md cursor-pointer" onClick={sendEmail} ref={formRef}> 
        Submit
      </button>
    </div>
  );
};

export default ContactMeInput;
