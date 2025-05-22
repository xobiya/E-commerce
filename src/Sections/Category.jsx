import CategoryCard from '../Components/CategoryCard'
import {categoryItems} from '../Components/index'

const Category = () => {
  return (
    <section className='mt-28 ml-[160px] mr-[80px]'>
        <div className="flex-1 flex flex-col justify-start">
        <div className="flex items-center mb-2">
          <span className="w-4 h-8 bg-red-500 rounded mr-2"></span>
          <span className="text-red-500 font-semibold text-lg font['Poppins']"> Categories</span>
        </div>
        </div>
        <h1 className='text-zinc-950 text-5xl font-["inter"] ' >Browse By Category</h1>
        <div className='flex flex-row gap-8 mt-15 justify-center'>
            {
                categoryItems.map((item)=>(
                    <CategoryCard Item={item} key={item.id} />
                ))
            }

        </div>
<hr className='mt-20 bg-[#746d6d]  '></hr>
    </section>
  )
}

export default Category