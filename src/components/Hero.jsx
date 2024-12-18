import RectangleOverlay from "../assets/rectangle_overlay.svg";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-black text-popins text-white">
        {/* Hero Section */}
      <div
        className="w-full h-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${RectangleOverlay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-md md:text-xl">
          Triple Your Revenue Without Big Marketing Spends!
        </p>
        <h1 className="text-3xl md:text-7xl font-bold uppercase text-center p-5">
          Scale Your E-commerce <br />
          Business
        </h1>
        <p className="w-3/4 text-center">
          By Hitting A Minimum of{" "}
          <span className="text-yellow-200">6-10X in ROI</span> in Less Than 3
          Months
        </p>
        <button className="mt-10 p-3 bg-button rounded-lg font-bold">Book your strategy call</button>
      </div>
    </section>
  );
}
