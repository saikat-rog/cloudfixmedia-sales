import { useState } from "react";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");

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
    <div className="w-full py-10 bg-gray-100 text-center px-4">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
        FREE Offer
      </h2>
      <p className="text-sm md:text-lg text-gray-600 mb-6">
        <span className="font-semibold">10 Proven Marketing Tips for Men’s Fashion Brands.</span> <br />
        Enter your email to get the FREE PDF.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
          className="bg-accent2 hover:bg-accent3 text-white px-6 py-2 rounded-md"
        >
          Get PDF
        </button>
      </form>
    </div>
  );
};

export default LeadMagnet;
