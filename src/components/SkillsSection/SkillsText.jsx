const SkillsText = () => {
  const COLORS = {
    pink: "#F6B1CE",
    blue: "#1581BF",
    teal: "#3DB6B1",
    mint: "#CCE5CF",
    textDark: "#0B1220",
    muted: "#475569",
  };

  return (
    <div className="flex flex-col items-center lg:items-start lg:w-full lg:px-20 mx-auto p-6">

      {/* Title */}
      <div className="relative mb-6">
        <h3
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center lg:text-left"
          style={{ color: COLORS.blue }}
        >
          What I Do
        </h3>

        {/* Underline accent */}
        <div
          className="h-[6px] rounded-full mt-2 mx-auto lg:mx-0 w-24"
          style={{ backgroundColor: COLORS.pink }}
        ></div>
      </div>


      {/* Card */}
      <div
        className="max-w-2xl w-full p-8 lg:p-10 rounded-3xl shadow-md bg-white border"
        style={{ borderColor: COLORS.mint }}
      >
        {/* Highlight Bar */}
        <div
          className="w-full h-2 rounded-full mb-6"
          style={{ backgroundColor: COLORS.teal }}
        ></div>

        {/* Content */}
        <p
          className="text-lg leading-relaxed mb-6 font-medium"
          style={{ color: COLORS.textDark }}
        >
          I specialize in creating full-stack web applications that are fast,
          responsive, and user-friendly. Using modern technologies and clean
          design principles, I turn complex ideas into seamless digital experiences.
        </p>

        {/* Bullet Feature List */}
        <ul className="space-y-4">
          {[
            "Frontend development with React.js, UI/UX, reusable components",
            "Backend APIs using Node.js, Express & secure architecture",
            "Databases — MongoDB, SQL, NoSQL management",
            "State management with Redux & Zustand",
            "Version control with Git & GitHub workflows",
            "Deployment, optimization & performance tuning",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* Icon */}
              <div
                className="mt-1 w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.pink }}
              ></div>

              {/* Text */}
              <span
                className="text-base sm:text-lg leading-snug"
                style={{ color: COLORS.muted }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Footer Tag */}
        <div
          className="mt-8 inline-block px-4 py-2 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: COLORS.pink + "20",
            color: COLORS.blue,
            border: `1px solid ${COLORS.pink}`,
          }}
        >
          Always learning. Always building.
        </div>
      </div>
    </div>
  );
};

export default SkillsText;
