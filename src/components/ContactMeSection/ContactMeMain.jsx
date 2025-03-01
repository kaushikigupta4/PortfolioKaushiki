import ContactMeInput from "./ContactMeInput";
import ContactMeText from "./ContactMeText";

const ContactMeMain = () => {
  return (
    <div className="w-full mx-auto relative mt-20" id="contact">
      <div className="text-5xl sm:text-4xl xs:text-3xl bg-white p-3 mb-5 text-blue-700 text-center lg:text-7xl">
        Contact Me
      </div>

      <div className="flex flex-col  md:flex-row  p-2 bg-[#EBEDFF] rounded-lg">
        <div className="md:flex-1 md:w-1/2">
          <ContactMeText />
        </div>
        <div className="md:flex-1 md:w-1/2  md:ml-12 sm:ml-0 p-4">
          <ContactMeInput />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
