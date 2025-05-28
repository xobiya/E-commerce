import pps from "/src/assets/Images/PPS-5.png";
import Women from "/src/assets/Images/Women-Hut.png";
import Speaker from "/src/assets/Images/Speaker.png";
import Gucci from "/src/assets/Images/Gucci.png";

const Feature = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[1200px] mt-12">
      {/* Featured Tag */}
      <div className="flex items-center mb-2">
        <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
        <span className="text-red-500 font-semibold text-lg">Featured</span>
      </div>
      
      {/* Title */}
      <h1 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8">New Arrival</h1>
      
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Left: Big Card */}
        <div className="bg-black rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-between">
          <div className="absolute bottom-16 md:bottom-20 lg:bottom-24 left-4 md:left-6 lg:left-8 text-white z-10">
            <h3 className="text-xl md:text-2xl font-['Inter'] mb-2">PlayStation 5</h3>
            <p className="text-xs md:text-sm font-['Poppins'] mb-2 md:mb-4">
              Black and White version of the PS5 <br className="hidden sm:block" /> coming out on sale.
            </p>
            <button className="text-[14px] md:text-[16px] underline font-['Poppins'] hover:text-red-400 transition">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center items-center mt-auto">
            <img
              src={pps}
              alt="PlayStation 5"
              className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[511px] h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Right: Stacked Cards */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:w-1/2">
          {/* Top Card */}
          <div className="relative bg-black rounded-2xl shadow-lg overflow-hidden w-full h-[200px] md:h-[240px] lg:h-[284px]">
            <img
              src={Women}
              alt="Women's hut collections"
              className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-2xl"
            />
            <div className="relative z-10 text-white p-4 md:p-6 flex flex-col justify-center h-full">
              <h4 className="text-xl md:text-2xl font-['Inter'] font-semibold mb-1 md:mb-2">
                Women's Collections
              </h4>
              <p className="text-xs md:text-sm font-['Poppins'] mb-1 md:mb-2">
                Featured woman collections that <br className="hidden sm:block" /> give you another vibe
              </p>
              <button className="text-[13px] md:text-[15px] underline font-['Poppins'] hover:text-red-400 transition">
                Shop Now
              </button>
            </div>
          </div>
          
          {/* Bottom: Two Side-by-Side Cards */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8">
            {/* Card 1: Speaker */}
            <div className="bg-black rounded-2xl shadow-lg p-4 md:p-6 w-full sm:w-1/2 h-[200px] md:h-[240px] lg:h-[284px] flex items-center justify-between">
              <div className="text-white">
                <h5 className="text-base md:text-lg font-semibold font-['Inter'] mb-1">Speakers</h5>
                <p className="text-[10px] md:text-xs mb-1 md:mb-2 w-full">Amazon Wireless Speakers</p>
                <button className="text-[12px] md:text-[14px] underline font-['Poppins'] hover:text-red-400 transition">
                  Shop Now
                </button>
              </div>
              <img
                src={Speaker}
                alt="Speaker"
                className="w-[100px] md:w-[130px] lg:w-[150px] h-auto object-contain rounded-lg"
              />
            </div>
            
            {/* Card 2: Perfume */}
            <div className="relative bg-black rounded-2xl shadow-lg overflow-hidden w-full sm:w-1/2 h-[200px] md:h-[240px] lg:h-[284px]">
              <img
                src={Gucci}
                alt="Gucci"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 flex items-center p-4 md:p-6 h-full">
                <div className="text-white">
                  <h5 className="text-base md:text-lg font-semibold mb-1">Perfume</h5>
                  <p className="text-[10px] md:text-xs mb-1 md:mb-2">GUCCI INTENSE EDP</p>
                  <button className="text-[12px] md:text-[14px] underline font-['Poppins'] hover:text-red-400 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
