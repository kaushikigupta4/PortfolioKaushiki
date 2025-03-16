import ContactMeInput from "./ContactMeInput";
import ContactMeText from "./ContactMeText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactMeMain = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        {
          opacity: 0,
          scale: 0.9, // Starts slightly smaller
          clipPath: "circle(0% at 50% 50%)", // Starts completely hidden
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "circle(100% at 50% 50%)", // Expands fully
          duration: 1.5,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={contactRef} className="w-full mx-auto relative mt-60 lg:mt-0" id="contact">
      {/* Heading */}
      <div className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#6146E0] text-center p-4 mb-6 tracking-wide drop-shadow-[0_0_40px_rgba(90,60,220,0.9)]">
        Connect With Me
      </div>

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
