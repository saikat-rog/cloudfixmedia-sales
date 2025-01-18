import p1 from "../assets/proof/p1.jpeg";
import p2 from "../assets/proof/p2.jpeg";
import p3 from "../assets/proof/p3.jpeg";
import p4 from "../assets/proof/p4.jpeg";
import p5 from "../assets/proof/p5.jpeg";
import p6 from "../assets/proof/p6.jpeg";
import p7 from "../assets/proof/p7.jpeg";
import p8 from "../assets/proof/p7.jpeg";
import p9 from "../assets/proof/p7.jpeg";
import p10 from "../assets/proof/p7.jpeg";
import Marquee from "react-fast-marquee";

const ProofInSlide = () => {
  return (
    <div className=" text-white text-xl md:text-4xl font-bold text-center space-y-10 md:space-y-16">
      <h1 className="text-xl md:text-5xl font-bold">
        Increased sales by 50% in first month
      </h1>
      <div className="overflow-hidden">
        <Marquee
          pauseOnHover={true}
          loop={0} // Infinite loop
          gradient={true}
          gradientWidth={100} // Adjust gradient width for effect
          speed={180} // Reduced speed for smoother scrolling
          gradientColor={[0, 0, 0]} // Proper RGB format for black gradient
        >
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p1} alt="Proof 1" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p2} alt="Proof 2" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p3} alt="Proof 3" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p4} alt="Proof 4" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p5} alt="Proof 5" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p6} alt="Proof 6" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p7} alt="Proof 7" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p8} alt="Proof 7" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p9} alt="Proof 7" className="h-full" />
            </div>
            <div className="image-wrapper border-green-600 border-2 mx-1 h-56 md:h-96">
              <img src={p10} alt="Proof 7" className="h-full" />
            </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProofInSlide;
