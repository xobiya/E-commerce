import { SellingItems } from '../Components/index';
import ProductCard from '../Components/ProductCard';

const Selling = () => {
  return (
    <section className="mt-28 mr-[80px] ml-[160px]">
      {/* Header Section */}
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
          <span className="text-red-500 font-semibold text-lg">This Month</span>
        </div>

        {/* Heading + Button on same line */}
        <div className="flex justify-between items-center mb-6">
          <h1 className='text-zinc-950 text-5xl font-["inter"]'>Best Selling Products</h1>
          <button className="bg-[#DB4444] rounded-[2px] h-[46px] w-[184px] px-5 text-[#FAFAFA] hover:bg-red-800 font-serif">
            View All Products
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SellingItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Selling;
