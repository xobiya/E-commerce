const Sidebar = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full px-4 lg:px-0">
      
      {/* Sidebar Menu */}
      <section className="mt-6 lg:mt-13 w-full lg:w-auto order-2 lg:order-1">
        <ul className="ml-2 md:ml-6 lg:ml-40 text-[16px] leading-[23px] flex flex-row lg:flex-col flex-wrap justify-start gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible">
          <li className="flex items-center whitespace-nowrap">
            <a href="#Woman's Fashion">Woman's Fashion</a>
            <img src="/src/assets/Icons/right-arrow-backup-2-svgrepo-com.svg" alt="" className="h-4 w-4 ml-1" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <a href="#Men's Fashion">Men's Fashion</a>
            <img src="/src/assets/Icons/right-arrow-backup-2-svgrepo-com.svg" alt="" className="h-4 w-4 ml-1" />
          </li>
          <li className="flex items-center whitespace-nowrap"><a href="#Electronics">Electronics</a></li>
          <li className="flex items-center whitespace-nowrap"><a href="#Home & Living">Home & Living</a></li>
          <li className="flex items-center whitespace-nowrap"><a href="#Medicine">Medicine</a></li>
          <li className="flex items-center whitespace-nowrap"><a href="#Beauty & Health">Beauty & Health</a></li>
          <li className="flex items-center whitespace-nowrap"><a href="#Sports & Outdoors">Sports & Outdoors</a></li>
          <li className="flex items-center whitespace-nowrap"><a href="#Toys & Babys">Toys & Babys</a></li>
          <li className="flex items-center whitespace-nowrap"><a href="#Groceries & Pets">Groceries & Pets</a></li>
        </ul>
      </section>

      {/* Promo Banner */}
      <div className="flex flex-col md:flex-row h-auto lg:h-[344px] w-full lg:w-[822px] bg-black ml-0 lg:ml-40 mt-6 lg:mt-10 relative order-1 lg:order-2 rounded-lg overflow-hidden">
        
        {/* Left Text Content */}
        <div className="relative flex-1 p-4 md:p-10">
          <div className="flex items-center text-white">
            <img src="/src/assets/icons/iphone.png" alt="iphone 14" className="h-10 w-10 md:h-16 md:w-16" />
            <h3 className="ml-2 md:ml-4 text-base md:text-lg">iPhone 14 Series</h3>
          </div>
          <h1 className="text-white text-2xl md:text-5xl font-bold mt-2 md:mt-5">
            Up to 10%<br />off Voucher
          </h1>
          <a href="#Shop Now" className="text-white underline flex items-center mt-4 md:mt-10">
            Shop Now
            <img src="/src/assets/Icons/Arrow-right.png" alt="" className="rounded-full p-1 h-6 w-6 ml-2" />
          </a>
        </div>

        {/* Right Image Content (INSIDE Black Background) */}
        <div className="flex-1 flex items-center justify-center p-2 md:p-4">
          <img
            src="src/assets/Images/hero_endframe__cvklg0xk3w6e_large 2.png"
            alt=""
            className="w-full max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
