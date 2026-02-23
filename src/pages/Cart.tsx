import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Redux/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../Redux/cardSlice";
import type { Product } from "../types/product";
import { GrFavorite } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import Container from "../Components/Container";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select cart products from Redux store
  const cartItems = useSelector((state: RootState) => state.cart.products);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Container className="mt-20 pb-20 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-5 sm:px-8 py-4 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-white font-rubik font-bold text-lg sm:text-xl">
            🎉 Saving to Celebrate
          </h2>
          <p className="text-blue-100 text-sm mt-0.5">
            Up to <span className="font-bold text-white">60% off</span> thousands
            of styles — End of Year Sale. No code needed.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-600 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Join Us
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-white text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Page Title */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <HiShoppingBag size={28} className="text-blue-600" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-rubik font-bold text-gray-900 uppercase tracking-wide">
            Your Bag
          </h1>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="text-xs text-red-400 hover:text-red-600 underline transition"
          >
            Clear all
          </button>
        )}
      </div>
      <p className="text-gray-500 text-sm mb-10 ml-[44px]">
        Items in your bag are not reserved — check out now to make them yours.
      </p>

      {/* Empty Cart */}
      {cartItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <HiShoppingBag size={56} className=" text-blue-500 " />
          <h2 className="text-xl font-rubik font-bold text-gray-400 uppercase">
            Your bag is empty
          </h2>
          <p className="text-gray-400 text-sm">Add some products to get started.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wide transition"
          >
            Shop Now
          </button>
        </div>
      )}

      {/* Main Layout */}
      {cartItems.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 flex gap-4 sm:gap-6 hover:shadow-md transition duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Product Image */}
                <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/200x200?text=No+Image";
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-rubik font-bold text-gray-900 text-sm sm:text-base uppercase leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        {item.category.name}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-bold text-gray-900 text-base sm:text-lg flex-shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 bg-gray-100 rounded-full px-1 py-1">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item as Product))}
                        className="h-7 w-7 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-red-50 hover:text-red-500 transition text-gray-600"
                      >
                        <FiMinus size={13} />
                      </button>
                      <span className="text-sm font-bold text-gray-900 px-3 min-w-[28px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item as Product))}
                        className="h-7 w-7 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-blue-50 hover:text-blue-500 transition text-gray-600"
                      >
                        <FiPlus size={13} />
                      </button>
                    </div>

                    {/* Unit Price */}
                    <span className="text-xs text-gray-400">
                      ${item.price.toFixed(2)} each
                    </span>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 hover:border-blue-400 hover:text-blue-500 transition text-gray-500">
                        <GrFavorite size={15} />
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item as Product))}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 hover:border-red-400 hover:text-red-500 transition text-gray-500"
                      >
                        <MdDelete size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                <MdLocalShipping size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3">
                <RiSecurePaymentLine size={22} className="text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">Secure Payment</p>
                  <p className="text-xs text-gray-500">100% protected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[360px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 sticky top-6">
              <h2 className="font-rubik font-bold text-xl text-gray-900 uppercase tracking-wide mb-6">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
                  </span>
                  <span className="font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    <span className="font-medium text-gray-900">
                      ${shipping.toFixed(2)}
                    </span>
                  )}
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-blue-500">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-5" />

              <div className="flex justify-between items-center mb-6">
                <span className="font-rubik font-bold text-gray-900 text-lg">Total</span>
                <span className="font-rubik font-bold text-blue-600 text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition"
                />
                <button className="px-4 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition">
                  Apply
                </button>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all text-white font-bold py-3.5 rounded-xl uppercase tracking-wide text-sm shadow-md shadow-blue-200">
                Checkout
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;