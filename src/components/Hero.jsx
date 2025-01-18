// import RectangleOverlay from "../assets/rectangle_overlay.webp";
import Logo from "/logo.png";
export default function Hero() {
  const handleButton = () => {
    window.location.href = "https://calendly.com/cloudfixmedia/lead";
  };

  return (
    <section className="w-full h-auto text-popins text-white">
      {/* Hero Section */}
      <div className="w-full h-full relative flex flex-col pt-20 md:pt-36 items-center space-y-5 justify-center px-4 md:px-8">
        {/* Logo */}
        <div className="bg-transparent absolute flex-row space-x-2 top-0 w-full items-center justify-center flex h-14 md:h-20 py-2">
          <div className="bg-white h-full flex flex-row items-center rounded-full text-black">
            <img src={Logo} alt="Logo" className=" h-full rounded-xl p-2" />
            <h1 className="font-semibold text-sm md:text-xl pr-3">CloudFixMedia</h1>
          </div>
        </div>

        <p className="text-sm md:text-xl text-center mb-4">
          Elevate Your Fashion E-Commerce Brand with Proven Expertise
        </p>

        <h1 className="text-4xl md:text-7xl font-bold uppercase text-center">
          Drive 10x Conversions for Your <br />
          E-Commerce Fashion Brand
        </h1>

        <p className="w-full md:w-3/4 text-center text-sm md:text-xl mb-6">
          By Hitting A Minimum of{" "}
          <span className="text-yellow-200">8-10X in ROI</span> in Less Than 2
          Months
        </p>

        <div className="pt-5 md:pt-10 w-full flex flex-col items-center">
          <button
            onClick={handleButton}
            className=" px-8 py-4 w-11/12 md:w-1/3 rounded-full font-bold text-md md:text-2xl text-black transition-transform duration-200 active:scale-95"
            style={{
              backgroundImage:
                "radial-gradient(at bottom center, #A0FEFF 20%, #FFFFFF 100%)",
            }}
          >
            BOOK YOUR STRATEGY CALL NOW
          </button>
        </div>
      </div>
    </section>
  );
}
