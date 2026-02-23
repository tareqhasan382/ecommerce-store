import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../Redux/products/productsApi";
import Skeleton from "./Skeletons";
const Products = () => {
  const { data, isLoading } = useGetProductsQuery({
    offset: 0,
    limit: 4,
  });

  if (isLoading) return <Skeleton variant="product-grid" count={8} />;
  if (!data || data.length === 0) return (
    <section className="relative w-full my-20 px-1 md:px-2 py-12">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center justify-center py-24 gap-4 text-center">
        <div className="text-7xl">📦</div>
        <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-gray-800 uppercase">
          No Products Found
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-[360px]">
          Looks like there's nothing here yet. Check back soon for new drops.
        </p>
        <button className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wide transition">
          Refresh
        </button>
      </div>
    </section>
  );
  return (
    <section className="relative w-full rounded-3xl my-20 px-1 md:px-2 py-12">

      {/* Header max-w-[1320px]*/}
      <div className=" mx-auto flex items-center justify-between gap-6 md:gap-2 mb-14">
        {/* Title */}
        <h1
          className="
      font-rubik font-bold uppercase leading-tight text-black
      text-lg sm:text-lg md:text-lg lg:text-5xl xl:text-6xl
      max-w-[520px]
    "
        >
          Don’t miss out <br /> new drops
        </h1>

        {/* CTA Button */}
        <button
          className="
      bg-blue-600 hover:bg-blue-500 text-white
      h-[42px] sm:h-[46px] md:h-[52px] px-4
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
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {data.length>0 && data?.map((item) => (
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
              <h3 className="font-rubik font-medium md:font-bold text-sm md:text-base text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Button always bottom */}
              <Link to={`/details/${item.id}`} className="mt-auto">
                <button className="h-[46px] w-full bg-black text-white uppercase rounded-xl font-medium md:font-bold text-xs md:text-base hover:bg-gray-800 transition">
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