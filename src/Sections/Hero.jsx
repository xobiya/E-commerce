import FlashSales from "../Components/FlashSales";

const Hero = () => {
  return (
    <section className="mt-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-start gap-6">
      {/* Left Section: Title & FlashSales */}
      <div className="flex-1 flex flex-col justify-start w-full">
        <div className="flex items-center mb-2">
          <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
          <span className="text-red-500 font-semibold text-lg">Today's</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Flash Sales</h2>
          <FlashSales />
        </div>
      </div>

      {/* Right Section: Arrows */}
      <div className="flex justify-center lg:justify-end items-center w-full lg:w-auto">
        <div className="flex flex-row items-center space-x-4 bg-transparent mt-4 lg:mt-8 ">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <img
              src="/src/assets/Icons/left-arrow.svg"
              alt="Left arrow icon"
              className="w-5 h-5"
            />
          </span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <img
              src="/src/assets/Icons/right-arrow.svg"
              alt="Right arrow icon"
              className="w-5 h-5"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
