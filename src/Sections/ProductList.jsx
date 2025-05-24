import ProductCard from "../Components/ProductCard";
import {Items} from "../Components/index";

const ProductList = () => {
  return (
 <section>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-[160px] mr-[80px] mt-8">
      {Items.map((item) => (
<ProductCard key={item.id} item={item} showDiscount={true} showStatus={false} />
      ))}
    </div>
    <div className="justify-center flex mt-8">
      <button className="bg-[#DB4444] rounded-[2px] h-[46px] w-[234px] pl-5 pr-5 pt-4 pb-5 font-serif text-[#FAFAFA] hover:bg-red-800">
        View All Products
      </button>
    </div>
 </section>
  );
};

export default ProductList;
