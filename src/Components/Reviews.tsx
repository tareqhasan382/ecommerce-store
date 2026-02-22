import user from "../assets/products/product_001.png";
import { TiStarFullOutline } from "react-icons/ti";

const reviews = [1, 2, 3];

const Reviews = () => {
    return (
        <section className="w-full max-w-[1320px] mx-auto py-20 px-4 sm:px-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-4xl font-rubik font-bold uppercase tracking-wide text-gray-900">
                    Reviews
                </h1>
                <button className="h-10 w-[121px] bg-blue-600 hover:bg-blue-500 transition text-white rounded-md uppercase font-semibold">
                    See all
                </button>
            </div>

            {/* Review Cards Container */}
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 md:gap-6 flex gap-4 overflow-x-auto scrollbar-hide">
                {reviews.map((_, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 lg:flex-shrink lg:static w-[300px] lg:w-auto bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between gap-4 hover:shadow-2xl transition duration-300"
                    >
                        {/* Top */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Good Quality
                                </h3>
                                <p className="text-gray-600 mt-1">
                                    I highly recommend shopping from kicks
                                </p>
                            </div>
                            <img
                                src={user}
                                alt="user"
                                className="w-12 h-12 rounded-full object-cover border border-gray-200"
                            />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <TiStarFullOutline key={i} size={20} color="#FACC15" />
                                    ))}
                            </div>
                            <span className="text-lg font-semibold text-gray-900">
                                5.0
                            </span>
                        </div>

                        {/* Product Image */}
                        <div className="w-full h-[260px] bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img
                                src={user}
                                alt="product"
                                className="w-full h-full object-contain p-6"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;