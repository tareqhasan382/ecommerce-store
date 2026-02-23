import HeaderImage from "../assets/header/image-14.png";
import NikeProduct_1 from "../assets/header/Rectangle-1.png";
import NikeProduct_2 from "../assets/header/Rectangle-2.png";

const Header = () => {
  return (
    <div className=" mt-[10px] sm:mt-[100px] lg:mt-[152px] flex justify-center relative w-full max-w-[1320px] mx-auto px-3 sm:px-4 lg:px-0">
      {/* Main Header Image */}
      <img
        src={HeaderImage}
        alt="Nike Air Max product"
        className="w-full h-[420px] sm:h-[460px] md:h-[440px] lg:h-auto object-cover rounded-xl"
      />

      {/* Overlay Product text — vertical badge, hidden on mobile */}
      <div className=" absolute top-36 sm:top-44 lg:top-60 left-10 sm:left-8 lg:left-9">
        <div className="bg-black text-white font-rubik font-semibold text-[10px] sm:text-xs lg:text-sm rounded-b-2xl px-1.5 sm:px-2 py-1.5 sm:py-2 transform rotate-[-90deg] origin-bottom-left whitespace-nowrap">
          Nike product of the year
        </div>
      </div>

      {/* Overlay small product images — bottom right */}
      <div className="absolute bottom-3 right-10 lg:right-10 sm:bottom-4 sm:right-4 flex flex-col gap-2 sm:gap-4">
        <img
          src={NikeProduct_1}
          alt="Product 1"
          className="w-[60px] sm:w-[90px] lg:w-[120px] h-auto object-cover rounded-lg shadow-md"
        />
        <img
          src={NikeProduct_2}
          alt="Product 2"
          className="w-[60px] sm:w-[90px] lg:w-[120px] h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Overlay text & CTA — bottom left */}
      <div className="absolute bottom-3 left-6 sm:bottom-4 sm:left-4 lg:bottom-4 lg:left-10 max-w-[55%] sm:max-w-[380px] lg:max-w-[490px]">
        <h3 className="text-xl sm:text-4xl lg:text-6xl font-semibold text-white leading-tight drop-shadow-lg">
          NIKE AIR MAX
        </h3>
        <p className="text-[10px] sm:text-base lg:text-2xl font-normal text-white my-1.5 sm:my-3 lg:my-5 leading-snug drop-shadow-md line-clamp-2 sm:line-clamp-none">
          Nike introducing the new air max for everyone's comfort
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all rounded-md text-white text-[10px] sm:text-sm lg:text-base px-3 py-1.5 sm:px-4 sm:py-2 font-medium shadow">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Header;