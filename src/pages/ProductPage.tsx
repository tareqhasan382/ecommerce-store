import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "../Components/Container";
import { IoMdHeart } from "react-icons/io";
import { useGetProductByIdQuery } from "../Redux/products/productsApi";
import RelatedProducts from "../Components/RelatedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cardSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(Number(id));
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (isLoading) {
    return (
      <Container className="mt-20 text-center">
        <p className="text-lg animate-pulse">Loading product...</p>
      </Container>
    );
  }

  if (isError || !product) {
    return (
      <Container className="mt-20 text-center">
        <p className="text-red-500">Product not found.</p>
      </Container>
    );
  }

  const images = product.images || [];
  const mainImage = activeImage || images[0];

  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* IMAGE SECTION */}
        <div>
          {/* Mobile */}
          <div className="block lg:hidden space-y-4">
            <div className="bg-gray-100 rounded-2xl">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-[320px] object-contain"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`border-2 rounded-xl ${mainImage === img ? "border-black" : "border-transparent"
                    }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="h-[70px] w-full object-contain bg-gray-100"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl">
                <img
                  src={img}
                  alt="product"
                  className="h-[260px] w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-6">
          <span className="text-sm uppercase text-gray-500">
            {product.category?.name}
          </span>

          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-2xl font-semibold">${product.price}</p>
          {/* Colors */}
          <div>
            <p className="font-medium mb-2">Color</p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-amber-400 cursor-pointer"></span>
              <span className="w-10 h-10 rounded-full bg-blue-500 cursor-pointer"></span>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Size</p>
              <button className="text-sm underline text-gray-500">
                Size chart
              </button>
            </div>

            <div className="flex  gap-3">
              {[38, 39, 40, 41, 42].map((size) => (
                <button
                  key={size}
                  className="border rounded-lg w-10 h-10 flex items-center justify-center font-medium text-sm hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex-1 bg-black text-white py-3 rounded-xl font-semibold">
              Add to Cart
            </button>
            <button className="w-12 h-12 border rounded-xl flex items-center justify-center">
              <IoMdHeart size={24} />
            </button>
          </div>

          <button
            onClick={() => navigate("/cart")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Buy Now
          </button>

          <div className="pt-6 border-t">
            <h3 className="font-semibold text-lg mb-2">About the product</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Related / More Products */}
      <RelatedProducts slug={product.slug} />
    </Container>
  );
};

export default ProductPage;