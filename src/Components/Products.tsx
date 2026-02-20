import { Link } from "react-router-dom";
import product1 from "../assets/products/product_001.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      description:
        "Lightweight, responsive, and eco-friendly running shoes for everyday performance.",
      image: product1,
    },
    {
      id: 2,
      name: "NIKE AIR MAX 270 REACT",
      description:
        "Smooth cushioning and stylish design for everyday running and casual wear.",
      image: product1,
    },
    {
      id: 3,
      name: "PUMA RS-X³",
      description:
        "Bold colors, retro style, and maximum comfort for all-day wear.",
      image: product1,
    },
    {
      id: 4,
      name: "REEBOK ZIG KINETICA",
      description:
        "Innovative sole technology for superior comfort and energy return.",
      image: product1,
    },
  ];

  return (
    <div className="relative w-full bg-gray-900 p-10 rounded-3xl my-20 flex flex-col items-center gap-16">
      
      {/* Hero Text + Button */}
      <div className="relative w-full flex justify-between items-start max-w-[1320px]">
        <h1 className="font-rubik font-bold text-6xl md:text-5xl sm:text-4xl text-white uppercase leading-tight max-w-lg">
          Don’t miss out <br /> new drops
        </h1>
        <div className="flex items-end">
          <button className="bg-blue-600 hover:bg-blue-500 text-white h-[52px] w-[200px] rounded-2xl font-semibold shadow-lg transition transform hover:scale-105">
            Shop New Drops
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="w-full max-w-[1320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-2 shadow-2xl w-full overflow-hidden hover:shadow-3xl transition-shadow duration-500 rounded-3xl flex flex-col"
          >
            {/* Product Image */}
            <div className="h-[350px] w-full overflow-hidden rounded-3xl p-1 bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-3xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-1 gap-4">
              <h3 className="font-rubik font-bold text-xl text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 flex-1">{item.description}</p>

              {/* View Product Button always at bottom */}
              <Link to={`/details/${item.id}`}>
              <button className="h-[48px] bg-black text-white uppercase rounded-2xl w-full font-semibold hover:bg-gray-800 transition mt-auto">
                View Product
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
