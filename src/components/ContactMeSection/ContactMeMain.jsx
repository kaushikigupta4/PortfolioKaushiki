import ContactMeInput from "./ContactMeInput";
import ContactMeText from "./ContactMeText";

const ContactMeMain = () => {
  return (
    <div className="gap-12 w-full mx-auto justify-around px relative mt-20" id="contact">
      <div className="text-5xl sm:text-4xl xs:text-3xl uppercase bg-white p-3 mb-5 text-blue-700 text-center">
        Contact Me
      </div>

      <div className="flex md:flex-row sm:flex-col p-10 sm:p-6 bg-[#EBEDFF] rounded-lg">
        <div className="flex-1 w-1/2 sm:w-full p-20 sm:p-10 xs:p-6">
          <ContactMeText />
        </div>
        <div className="flex-1 w-1/2 sm:w-full ml-12 sm:ml-0 p-20 sm:p-10 xs:p-6">
          <ContactMeInput />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
