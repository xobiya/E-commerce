import CategoryCard from '../Components/CategoryCard';
import { categoryItems } from '../Components/index';

const Category = () => {
  return (
    <section className="mt-28 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="flex-1 flex flex-col justify-start">
        <div className="flex items-center mb-2">
          <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
          <span className="text-red-500 font-semibold text-lg font-poppins">
            Categories
          </span>
        </div>
      </div>

      <h1 className="text-zinc-950 text-3xl sm:text-4xl md:text-5xl font-inter mb-8">
        Browse By Category
      </h1>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {categoryItems.map((item) => (
          <CategoryCard Item={item} key={item.id} />
        ))}
      </div>

      <hr className="mt-20 bg-[#746d6d] border-0 h-[1px]" />
    </section>
  );
};

export default Category;
