import One from "/logo.png";
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <div className="w-full py-10 bg-black text-white text-center">
      <h1 className="text-xl md:text-4xl mb-6 font-bold pb-8">
        Brands We Have Worked With
      </h1>

      <div className="overflow-hidden">
        <Marquee
          pauseOnHover={true}
          loop={0}
          gradient={true}
          gradientWidth={100} // Increased gradient width for more concentration in the center
          speed={40}
          gradientColor="rgba(0, 0, 0, 0.8)" // Subtle transparent black gradient
          className="sm:gradient-width-100 md:gradient-width-600"
        >
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
        </Marquee>
      </div>
    </div>
  );
}
