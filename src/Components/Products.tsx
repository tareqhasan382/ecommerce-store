import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../Redux/products/productsApi";
const Products = () => {
  const { data } = useGetProductsQuery({
  offset: 0,
  limit: 4,
});


  return (
    <section className="relative w-full bg-gray-900 rounded-3xl my-20 px-4 sm:px-8 py-12">
    
      {/* Header */}
      <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-6 mb-14">
        {/* Title */}
        <h1
          className="
      font-rubik font-bold uppercase leading-tight text-white
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
      max-w-[520px]
    "
        >
          Don’t miss out <br /> new drops
        </h1>

        {/* CTA Button */}
        <button
          className="
      bg-blue-600 hover:bg-blue-500 text-white
      h-[42px] sm:h-[46px] md:h-[52px]
      px-5 sm:px-6 md:px-8
      rounded-xl sm:rounded-2xl
      font-semibold text-sm sm:text-base
      shadow-lg transition transform hover:scale-105
      whitespace-nowrap
    "
        >
          Shop New Drops
        </button>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-2 shadow-xl hover:shadow-2xl transition flex flex-col"
          >
            {/* Image */}
            <div className="h-[220px] sm:h-[280px] lg:h-[350px] w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-2 pt-4">
              <h3 className="font-rubik font-bold text-base sm:text-lg text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Button always bottom */}
              <Link to={`/details/${item.id}`} className="mt-auto">
                <button className="h-[46px] w-full bg-black text-white uppercase rounded-xl font-semibold hover:bg-gray-800 transition">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;