const ProductCard = ({ item, showDiscount = true, showStatus = true }) => {
  const LikeIcon = (
    <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center bg-white rounded-full p-1 shadow hover:bg-gray-100 cursor-pointer border border-gray-200 transition hover:text-red-500 focus:outline-none">
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    </button>
  );

  const EyeIcon = (
    <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center bg-white rounded-full p-1 shadow hover:bg-gray-100 cursor-pointer border border-gray-200 transition hover:text-blue-500 focus:outline-none">
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      </svg>
    </button>
  );

  return (
    <div className="group relative p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer w-full max-w-xs mx-auto mb-4 flex flex-col items-start justify-between gap-2 sm:gap-3">
      {/* Discount Badge */}
      {showDiscount && item.Discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {item.Discount}
        </span>
      )}
      
      {/* New Badge */}
      {showStatus && item.Status && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {item.Status}
        </span>
      )}

      {/* Action Icons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        {LikeIcon}
        {EyeIcon}
      </div>

      {/* Product Image */}
      <div className="w-full flex justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 sm:h-36 md:h-40 object-contain mb-3 sm:mb-4 mt-4 sm:mt-6"
          loading="lazy"
        />
      </div>

      {/* Text Content Container */}
      <div className="w-full space-y-1 sm:space-y-2">
        {/* Add To Cart Button */}
        <button className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white text-sm sm:text-base rounded hover:bg-gray-700 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Add To Cart
        </button>

        {/* Description */}
        <h2 className="text-sm sm:text-base font-bold line-clamp-2">{item.description}</h2>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-base sm:text-lg">{item.PriceDiscount}</span>
          <span className="text-gray-400 line-through text-xs sm:text-sm">{item.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
              fill="#FFAD33"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500">({item.reviwes})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;