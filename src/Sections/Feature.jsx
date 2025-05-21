
import pps from "/src/assets/Images/PPS-5.png";


const Feature = () => {
  return (
    <div className="mx-auto max-w-[1200px] mt-12">
      {/* Featured Tag */}
      <div className="flex items-center mb-2">
        <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
        <span className="text-red-500 font-semibold text-lg">Featured</span>
      </div>

      {/* Title */}
      <h1 className="font-['Poppins'] text-5xl mb-8">New Arrival</h1>

      {/* Main Section */}
      <div className="flex gap-8">
        {/* Left: Big Card */}
        <div className="flex-1 bg-black rounded-2xl shadow-lg flex flex-col justify-between p-8 min-h-[600px] max-w-[570px]">
          <div className="flex flex-col justify-end text-white h-full">
            <h3 className="text-[24px] font-['Inter'] mb-2">PlayStation 5</h3>
            <p className="text-[14px] font-['Poppins'] mb-4">
              Black and White version of the PS5 <br />
              coming out on sale.
            </p>
            <button className="text-[16px] underline font-['Poppins'] mt-2 hover:text-red-400 transition">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center items-start mt-4">
            <img
              src={pps}
              alt="PlayStation 5"
              className="w-[250px] h-[250px] object-contain "
            />
          </div>
        </div>

        {/* Right: Two stacked cards */}
        <div className="flex flex-col gap-8 flex-1 min-w-[570px]">
          {/* Top Card */}
          <div className="flex bg-black rounded-2xl shadow-lg p-6 items-center min-h-[284px]">
            
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-2">DualSense Controller</h4>
              <p className="text-sm mb-2">Wireless controller for PS5</p>
              <button className="text-[15px] underline font-['Poppins'] hover:text-red-400 transition">
                Shop Now
              </button>
            </div>
          </div>
          {/* Bottom Cards: Two side-by-side */}
          <div className="flex gap-8">
            <div className="flex-1 bg-black rounded-2xl shadow-lg p-6 flex items-center min-h-[130px]">
            
              <div className="text-white">
                <h5 className="text-lg font-semibold mb-1">PS5 Headset</h5>
                <p className="text-xs mb-1">3D Audio Wireless</p>
                <button className="text-[14px] underline font-['Poppins'] hover:text-red-400 transition">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black rounded-2xl shadow-lg p-6 flex items-center min-h-[130px]">
              <img
                src={pps}
                alt="Card 3"
                className="w-[60px] h-[60px] object-contain rounded-lg mr-4"
              />
              <div className="text-white">
                <h5 className="text-lg font-semibold mb-1">PS5 Remote</h5>
                <p className="text-xs mb-1">Media Remote</p>
                <button className="text-[14px] underline font-['Poppins'] hover:text-red-400 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
