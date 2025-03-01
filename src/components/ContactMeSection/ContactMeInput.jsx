const ContactMeInput = () => {
  return (
    <div className="flex flex-col p-3 gap-4 sm:gap-3 xs:gap-2 h-full justify-center mx-auto md:text-left sm:text-center w-[90%] lg:p-25 md:p-10">
      
    
      <input 
        type="text" 
        placeholder="Name" 
        aria-label="Enter your name"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[50px] sm:h-[45px] xs:h-[40px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
   
      <input 
        type="email" 
        placeholder="Email" 
        aria-label="Enter your email"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[50px] sm:h-[45px] xs:h-[40px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />


      <textarea 
        placeholder="Message" 
        aria-label="Enter your message"
        className="w-full p-2 sm:p-2 xs:p-1 border border-gray-300 bg-white text-black h-[160px] sm:h-[120px] xs:h-[100px] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

    
      <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-bold py-2 px-4 h-[50px] sm:h-[45px] xs:h-[40px] rounded-md cursor-pointer">
        Submit
      </button>
    </div>
  );
};

export default ContactMeInput;
