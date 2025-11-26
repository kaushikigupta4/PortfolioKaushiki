import ContactMeInput from "./ContactMeInput";
import ContactMeText from "./ContactMeText";

const ContactMeMain = () => {
  return (
    <div className="w-full mx-auto relative mt-60 lg:mt-0" id="contact">

      {/* Contact Section */}
      <div
        className="
          flex flex-col md:flex-row p-6 rounded-2xl shadow-md 
        "
        style={{
          backgroundColor: "#FFFFFF",     // light clean card
          border: "1px solid #CCE5CF"     // mint border
        }}
      >
        <div className="md:flex-1 md:w-1/2">
          <ContactMeText />
        </div>

        <div className="md:flex-1 md:w-1/2 md:ml-12 p-4">
          <ContactMeInput />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
