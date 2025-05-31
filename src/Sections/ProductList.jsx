import ProductCard from "../Components/ProductCard";
import { Items } from "../Components/index";

const ProductList = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {Items.map((item) => (
          <ProductCard 
            key={item.id} 
            item={item} 
            showDiscount={true} 
            showStatus={false} 
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#DB4444] rounded-[2px] h-[46px] w-full max-w-[234px] px-5 py-4 font-serif text-[#FAFAFA] hover:bg-red-800 transition-colors duration-200">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductList;