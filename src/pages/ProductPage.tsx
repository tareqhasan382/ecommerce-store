import { useState } from "react";
import Container from "../Components/Container";
import Products from "../Components/Products";
import { IoMdHeart } from "react-icons/io";

// demo images
import img1 from "../assets/products/product_001.png";
import img2 from "../assets/products/product_001.png";
import img3 from "../assets/products/product_001.png";
import img4 from "../assets/products/product_001.png";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3, img4];

const ProductPage = () => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const navigate = useNavigate();
  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= IMAGE SECTION ================= */}
        <div className="w-full">

          {/* MOBILE VIEW */}
          <div className="block lg:hidden space-y-4">
            {/* Big Image */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={activeImage}
                alt="product"
                className="w-full h-[320px] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`rounded-xl overflow-hidden border-2 
                  ${activeImage === img ? "border-black" : "border-transparent"}`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-[70px] object-contain bg-gray-100"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl overflow-hidden"
              >
                <img
                  src={img}
                  alt="product"
                  className="w-full h-[260px] object-contain hover:scale-105 transition"
                />
              </div>
            ))}
          </div>

        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="space-y-6">
          <span className="text-sm uppercase tracking-wide text-gray-500">
            New Release
          </span>

          <h1 className="text-3xl font-bold">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>

          <p className="text-2xl font-semibold">$125.00</p>

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

            <div className="grid grid-cols-5 gap-3">
              {[38, 39, 40, 41, 42].map((size) => (
                <button
                  key={size}
                  className="border rounded-lg py-2 font-medium hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition">
              Add to Cart
            </button>
            <button className="w-12 h-12 flex items-center justify-center border rounded-xl hover:bg-gray-100">
              <IoMdHeart size={22} />
            </button>
          </div>

          <button
            onClick={() => navigate("/cart")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Buy Now
          </button>

          {/* About */}
          <div className="pt-6 border-t">
            <h3 className="font-semibold text-lg mb-2">About the product</h3>
            <p className="text-gray-600 leading-relaxed">
              Shadow Navy / Army Green <br />
              This product is excluded from all promotional discounts and offers.
              Pay over time in interest-free installments with Affirm, Klarna or
              Afterpay. Join adiClub to get unlimited free shipping, returns, &
              exchanges.
            </p>
          </div>
        </div>

      </div>

      {/* Related products */}
      <Products />
    </Container>
  );
};

export default ProductPage;