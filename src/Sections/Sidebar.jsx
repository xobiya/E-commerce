const Sidebar = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      <section className="mt-6 lg:mt-13 w-full lg:w-auto order-2 lg:order-1">
        <ul className="ml-4 lg:ml-40 text-[16px] leading-[23px] h-auto lg:h-[344px] flex flex-row lg:flex-col flex-wrap justify-between gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible">
          <li className="flex items-center">
            <a href="#Woman's Fashion">Woman's Fashion</a>
            <img src="/src/assets/Icons/right-arrow-backup-2-svgrepo-com.svg" alt="" className="h-4 w-4 ml-1" />
          </li>
          <li className="flex items-center">
            <a href="#Men's Fashion">Men's Fashion</a>
            <img src="/src/assets/Icons/right-arrow-backup-2-svgrepo-com.svg" alt="" className="h-4 w-4 ml-1" />
          </li>
          <li className="flex items-center">
            <a href="#Electronics">Electronics</a>
          </li>
          <li className="flex items-center">
            <a href="#Home & Living">Home & Living</a>
          </li>
          <li className="flex items-center">
            <a href="#Medicine">Medicine</a>
          </li>
          <li className="flex items-center">
            <a href="#Beauty & Health">Beauty & Health</a>
          </li>
          <li className="flex items-center">
            <a href="#Sports & Outdoors">Sports & Outdoors</a>
          </li>
          <li className="flex items-center">
            <a href="#Toys & Babys">Toys & Babys</a>
          </li>
          <li className="flex items-center">
            <a href="#Groceries & Pets">Groceries & Pets</a>
          </li>
        </ul>
      </section>
      <div className="flex flex-col md:flex-row h-auto lg:h-[344px] w-full lg:w-[822px] bg-black ml-0 lg:ml-40 mt-6 lg:mt-10 relative order-1 lg:order-2 rounded-lg overflow-hidden">
        <div className="relative flex-1 p-4 md:p-10">
          <div className="flex items-center text-white">
            <img src="/src/assets/icons/iphone.png" alt="iphone 14" className="h-10 w-10 md:h-16 md:w-16" />
            <h3 className="ml-2 md:ml-4 text-base md:text-lg">iPhone 14 Series</h3>
          </div>
          <h1 className="text-white text-2xl md:text-5xl font-bold mt-2 md:mt-5">
            Up to 10%<br />off Voucher
          </h1>
          <a href="#Shop Now" className="text-white underline  left-4 md:left-10 bottom-4 md:bottom-[50px] flex items-center md:mt-20 min-sm:mt-15">
            Shop Now
            <img src="/src/assets/Icons/Arrow-right.png" alt="" className="rounded-full p-1 h-6 w-6 inline-block ml-2" />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center p-2 md:p-0">
          <img src="src/assets/Images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" className="max-h-40 md:max-h-full w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;