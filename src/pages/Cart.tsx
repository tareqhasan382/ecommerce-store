import product from "../assets/products/product_001.png";
import { GrFavorite } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Container from "../Components/Container";

const cartItems = [
  {
    id: 1,
    name: "DROPSET TRAINER SHOES",
    type: "Men's Road Running Shoes",
    color: "Enamel Blue / University White",
    size: "10",
    quantity: 1,
    price: 129.95,
    image: product,
  },
  {
    id: 2,
    name: "AIR ZOOM PEGASUS 40",
    type: "Men's Running Shoes",
    color: "Black / White / Volt",
    size: "9.5",
    quantity: 2,
    price: 149.95,
    image: product,
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Container className="mt-20 pb-20">

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-5 sm:px-8 py-4 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-white font-rubik font-bold text-lg sm:text-xl">
            🎉 Saving to Celebrate
          </h2>
          <p className="text-blue-100 text-sm mt-0.5">
            Up to <span className="font-bold text-white">60% off</span> thousands of styles — End of Year Sale. No code needed.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button className="bg-white text-blue-600 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition">
            Join Us
          </button>
          <button className="border border-white text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition">
            Sign In
          </button>
        </div>
      </div>

      {/* Page Title */}
      <div className="flex items-center gap-3 mb-8">
        <HiShoppingBag size={28} className="text-blue-600" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-rubik font-bold text-gray-900 uppercase tracking-wide">
          Your Bag
        </h1>
      </div>
      <p className="text-gray-500 text-sm -mt-6 mb-10 ml-[44px]">
        Items in your bag are not reserved — check out now to make them yours.
      </p>

      {/* Main Layout */}
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
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-rubik font-bold text-gray-900 text-sm sm:text-base uppercase leading-tight">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.type}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.color}</p>
                  </div>
                  <span className="font-bold text-gray-900 text-base sm:text-lg flex-shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* Size & Quantity + Actions */}
                <div className="  items-center justify-between flex-wrap gap-3">
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                      Size {item.size}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                      Qty {item.quantity}
                    </span>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 hover:border-blue-400 hover:text-blue-500 transition text-gray-500">
                      <GrFavorite size={15} />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 hover:border-red-400 hover:text-red-500 transition text-gray-500">
                      <MdDelete size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-2">
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
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 my-5" />

            <div className="flex justify-between items-center mb-6">
              <span className="font-rubik font-bold text-gray-900 text-lg">Total</span>
              <span className="font-rubik font-bold text-blue-600 text-xl">${total.toFixed(2)}</span>
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
    </Container>
  );
};

export default Cart;