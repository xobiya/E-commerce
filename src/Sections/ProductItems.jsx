import { Products } from "../Components"
import ProductCard from "../Components/ProductCard";

const ProductItems = () => {
  return (
    <section className="ml-[160px] mr-[80px] mt-8">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Products.map((item) => (
<ProductCard key={item.id} item={item} showDiscount={false} showStatus={true} />
        ))}
      </div>
      <div className="justify-center flex mt-14">
        <button className="bg-[#DB4444] rounded-[2px] h-[46px] w-[234px] pl-5 pr-5 pt-4 pb-5 font-serif text-[#FAFAFA] hover:bg-red-800">
          View All Products
        </button>
      </div>
    </section>
  );
}

export default ProductItems;
