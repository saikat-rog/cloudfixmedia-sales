import One from "../assets/One.svg";
import Two from "../assets/Two.png";
import Three from "../assets/Three.webp";
import Four from "../assets/Four.webp";
import Five from "../assets/Five.png";
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
          loop={0} // Infinite loop
          gradient={true}
          gradientWidth={100} // Adjust gradient width for effect
          speed={200} // Reduced speed for smoother scrolling
          gradientColor={[0, 0, 0]} // Proper RGB format for black gradient
        >
          <img src={One} alt="Brand 1" className="h-16 mx-8" />
          <img src={Two} alt="Brand 2" className="h-16 mx-8" />
          <img src={Three} alt="Brand 3" className="h-16 mx-8" />
          <img src={Four} alt="Brand 4" className="h-16 mx-8" />
          <img src={Five} alt="Brand 5" className="h-16 mx-8" />
        </Marquee>
      </div>
    </div>
  );
}
