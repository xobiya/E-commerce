import React from "react";
import FlashSales from "../Components/FlashSales";

const Main = () => {
  return (
    <section className="mt-28 mx-auto h-[500px] w-[1170px] bg-black rounded-lg relative flex items-center justify-between px-12">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6">
        <span className="text-[#00FF66] font-['Inter'] text-sm">
          Categories
        </span>

        <h1 className="text-white text-[48px] leading-[60px] tracking-wide font-semibold font-['Inter']">
          Enhance Your <br /> Music Experience
        </h1>

        <FlashSales
          rounded="rounded-full"
          bgColor="bg-white"
          textColor="text-black"
        />

        <button className="mt-4 bg-[#00FF66] w-[171px] h-[56px] rounded-xl text-white font-['Inter']">
          Buy Now!
        </button>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="/src/assets/Images/BoomBox.png"
          alt="Hero Speaker"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default Main;
