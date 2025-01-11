import One from "../assets/one.jpg";

export default function Brands() {
    return (
      <div className="w-full py-10 bg-black text-white text-center">
        <h1 className="text-xl md:text-4xl mb-6 font-bold">Brands We Have Worked With</h1>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-10">
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            <img src={One} alt="Brand 1" className="h-16" />
            {/* Add more brand logos as needed */}
          </div>
        </div>
  
        {/* Inline CSS for marquee */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
  
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    );
  }
  