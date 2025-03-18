import ContactMeInput from "./ContactMeInput";
import ContactMeText from "./ContactMeText";


const ContactMeMain = () => {
  

  return (
    <div  className="w-full mx-auto relative mt-60 lg:mt-0" id="contact">
      {/* Heading */}
      

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row p-4 bg-gradient-to-br from-[#0A0F2C] via-[#15295A] to-[#1E3A8A] rounded-lg">
        <div className="md:flex-1 md:w-1/2">
          <ContactMeText />
        </div>
        <div className="md:flex-1 md:w-1/2 md:ml-12 sm:ml-0 p-4">
          <ContactMeInput />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
