import { useState } from "react";


const LeadMagnet = () => {
  const [email, setEmail] = useState("");

  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/lead";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! The PDF will be sent to: ${email}`);
      setEmail(""); // Reset the email field
    } else {
      alert("Please enter a valid email address.");
    }
  };
  
  return (
    <div className="w-full py-10 bg-black text-white text-center px-4">
      <h2 className="text-xl md:text-3xl font-bold  mb-4">
        FREE Offer
      </h2>
      <p className="text-sm md:text-lg mb-6">
        <span className="font-semibold">10 Proven Marketing Tips for Men’s Fashion Brands.</span> <br />
        Enter your email to get the FREE PDF.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center gap-4 text-accent2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-accent2"
          required
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-400 text-accent2 w-1/3 md:w-24 h-10 rounded-md font-bold"
        >
          Get PDF
        </button>
      </form>
      <div className="pt-5 md:pt-10 w-full flex flex-col items-center">
          <button
            onClick={handleButton}
            className=" px-8 py-4 w-11/12 md:w-2/3 rounded-2xl font-bold text-md md:text-2xl text-black transition-transform duration-200 active:scale-95"
            style={{
              backgroundImage:
                "radial-gradient(at bottom center, #A0FEFF 20%, #FFFFFF 100%)",
            }}
          >
            BOOK YOUR STRATEGY CALL NOW
          </button>
        </div>
    </div>
  );
};

export default LeadMagnet;
