import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
import { useGetCategoriesQuery } from "../Redux/categories/categoriesApi";

const Categories = () => {
  // Fetch categories from API
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) return <p className="text-white p-10">Loading categories...</p>;
  if (isError) return <p className="text-white p-10">Failed to load categories.</p>;
// max-w-[1320px]
  return (
    <section className="w-full  mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8  px-4 sm:px-6 lg:px-0 text-white">
      {/* Header */}
      <div className="flex items-center justify-between py-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-rubik font-bold uppercase tracking-wide">
          Categories
        </h1>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-gray-100 text-black transition shadow">
            <IoIosArrowBack size={18} />
          </button>
          <button className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-gray-100 text-black transition shadow">
            <IoIosArrowForward size={18} />
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 ml-20">
        {categories?.slice(0, 2).map((category,index) => (
          <div
            key={category.id}
            className={`relative group overflow-hidden bg-gray-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-[320px] sm:h-[480px] lg:h-[600px]
      ${index === 0 ? "rounded-tl-3xl bg-gray-200" : ""}
    `}
          >
            <div className="flex items-center justify-center flex-1">
              <img
                src={category.image}
                alt={category.name}
                className="w-[160px] sm:w-[220px] lg:w-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-end justify-between mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 uppercase">
                {category.name}
              </h3>
              <button className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 flex items-center justify-center rounded-full bg-black shadow-md text-white transition">
                <RiExternalLinkFill size={18} />
              </button>
            </div>
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;