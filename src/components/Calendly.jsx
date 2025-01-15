import { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup to remove script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black" id="calendly-section">
      <h1 className="text-xl md:text-4xl mb-6 font-bold text-white text-center flex flex-col">
        Book your call today
      </h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/cloudfixmedia/lead"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default Calendly;
