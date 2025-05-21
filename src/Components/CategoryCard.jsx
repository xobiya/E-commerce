

const CategoryCard = ({ Item }) => {
  // Determine if this is the camera card
  const isCamera = Item.name && Item.name.toLowerCase() === "camera";

  return (
    <div
      className={`w-[240px] h-[145px] flex flex-col items-center justify-center shadow-lg rounded-xl transition-all duration-200 cursor-pointer ${
        isCamera
          ? "bg-red-500 text-white"
          : "bg-[#F5F5F5] text-zinc-900"
      }`}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          isCamera ? "" : "bg-zinc-200"
        }`}
      >
        <img
          src={Item.image}
          alt={Item.name}
          className={`object-contain w-10 h-10 ${
            isCamera ? "" : ""
          }`}
        />
      </div>
      <p className="font-['Poppins'] text-lg font-semibold">{Item.name}</p>
    </div>
  );
};

export default CategoryCard;
