import FlashSales from "../Components/FlashSales";

const Hero = () => {
  return (
    <section className="mt-14 ml-[160px] mr-[80px] flex">
      <div className="flex-1 flex flex-col justify-start">
        <div className="flex items-center mb-2">
          <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
          <span className="text-red-500 font-semibold text-lg">Today's</span>
        </div>
       <div className="flex items-center gap-[90px]">
  <h2 className="text-3xl md:text-4xl font-bold">Flash Sales</h2>
  <FlashSales />
</div>

      </div>
      <div className="flex flex-col justify-center items-center ml-[370px] flex-shrink-0">
        <div className="flex flex-row items-center space-x-4 bg-transparent mt-8">
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
