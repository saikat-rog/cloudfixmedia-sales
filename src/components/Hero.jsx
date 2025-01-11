import RectangleOverlay from "../assets/rectangle_overlay.svg";
import Logo from "../../public/logo.png";
export default function Hero() {
  return (
    <section className="w-full h-screen bg-black text-popins text-white">
      {/* Hero Section */}
      <div
        className="w-full h-full relative flex flex-col items-center space-y-5 justify-center px-4 md:px-8"
        style={{
          backgroundImage: `url(${RectangleOverlay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-accent2 absolute flex-row space-x-2 top-0 w-full items-center justify-center flex h-10 md:h-16 py-2">
          <div className="bg-white px-5 h-full flex flex-row items-center space-x-2 rounded-md text-black">
            <img src={Logo} alt="Logo" className=" h-full" />
            <h1 className="font-semibold text-sm md:text-lg">CloudFixMedia</h1>
          </div>
        </div>
        <p className="text-sm md:text-xl text-center mb-4">
          Elevate Your Men&apos;s Fashion E-Commerce Brand with Proven Expertise
        </p>
        <h1 className="text-3xl md:text-5xl font-bold uppercase max-w-2xl md:max-w-6xl text-center">
          Drive 2x Conversions for Your Men&apos;s Fashion E-Commerce Brand
        </h1>
        <p className="w-full md:w-3/4 text-center mb-6">
          By Hitting A Minimum of{" "}
          <span className="text-yellow-200">6-10X in ROI</span> in Less Than 3
          Months
        </p>
        <button className="mt-10 px-8 py-3 bg-accent2 rounded-md font-semibold text-lg md:text-xl">
          Book your strategy call
        </button>
      </div>
    </section>
  );
}
