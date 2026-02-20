import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
import product from "../assets/products/product_001.png";

const Categories = () => {
    return (
        <section className="w-full max-w-[1320px] mx-auto py-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-4xl font-rubik font-bold uppercase tracking-wide text-gray-900">
                    Categories
                </h1>

                <div className="flex items-center gap-3">
                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition shadow">
                        <IoIosArrowBack size={20} />
                    </button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition shadow">
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
            </div>

            {/* Categories Grid */}
            <div className=" w-full flex items-center justify-center ">
                <div className="w-[60px]"></div>
                <div className="grid grid-cols-2 gap-6 h-[600px] w-full">
                {/* Category Card */}
                <div className="relative group rounded-tl-3xl overflow-hidden bg-amber-100 p-10 flex flex-col justify-between">

                    {/* Image wrapper (CENTERED) */}
                    <div className="flex items-center justify-center flex-1">
                        <img
                            src={product}
                            alt="Lifestyle Shoes"
                            className="w-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex items-end justify-between mt-8">
                        <h3 className="text-4xl font-bold leading-tight text-gray-900 uppercase">
                            Lifestyle <br /> Shoes
                        </h3>

                        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md group-hover:bg-black group-hover:text-white transition">
                            <RiExternalLinkFill size={22} />
                        </button>
                    </div>

                    {/* Soft hover overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Category Card */}
                <div className="relative group overflow-hidden bg-amber-100 p-10 flex flex-col justify-between">

                    {/* Image wrapper (CENTERED) */}
                    <div className="flex items-center justify-center flex-1">
                        <img
                            src={product}
                            alt="Lifestyle Shoes"
                            className="w-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex items-end justify-between mt-8">
                        <h3 className="text-4xl font-bold leading-tight text-gray-900 uppercase">
                            Lifestyle <br /> Shoes
                        </h3>

                        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md group-hover:bg-black group-hover:text-white transition">
                            <RiExternalLinkFill size={22} />
                        </button>
                    </div>

                    {/* Soft hover overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
                </div>
            </div>
            </div>
        </section>
    );
};

export default Categories;