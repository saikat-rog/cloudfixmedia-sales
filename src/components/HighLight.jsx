export default function HighLights() {
    return (
      <div className="w-full pt-20 flex flex-col md:flex-row items-center justify-center p-6 bg-black text-white space-y-6 md:space-x-6">
        {/* Experience Box */}
        <div className="flex flex-col items-center justify-center space-y-2 w-32 md:w-48 h-32 md:h-48 bg-accent2 text-white rounded-2xl md:rounded-3xl shadow-lg">
          <span className="text-3xl md:text-5xl font-bold">7+</span>
          <span className="text-sm md:text-xl w-2/3 text-center">Years of Experience</span>
        </div>
  
        {/* Adspends Box */}
        <div className="flex flex-col items-center justify-center space-y-2 w-32 md:w-48 h-32 md:h-48 bg-accent2 text-white rounded-2xl md:rounded-3xl shadow-lg mt-6 md:mt-0">
          <span className="text-3xl md:text-5xl font-bold">40</span>
          <span className="text-xl md:text-3xl font-bold">Crs+</span>
          <span className="text-sm md:text-xl w-2/3 text-center">In Adspends</span>
        </div>
      </div>
    );
  }
  