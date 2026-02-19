import HeaderImage from "../assets/header/image-14.png";
import NikeProduct_1 from "../assets/header/Rectangle-1.png";
import NikeProduct_2 from "../assets/header/Rectangle-2.png";
const Header = () => {
  return (
    <div className="mt-[152px] flex justify-center relative w-full max-w-[1320px] mx-auto">
        {/* Main Header Image */}
        <img
          src={HeaderImage}
          alt="Nike Air Max product"
          className="w-full h-auto object-cover rounded-xl"
        />

        {/* Overlay Product text at top-left, vertical */}
        <div className="absolute top-60 left-9">
          <div className="bg-black text-white font-rubik font-semibold text-sm rounded-b-2xl px-2 py-2 transform rotate-[-90deg] origin-bottom-left">
            Nike product of the year
          </div>
        </div>


        {/* Overlay small product images at bottom-right */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-4">
          <img
            src={NikeProduct_1}
            alt="Product 1"
            className="w-[120px] h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src={NikeProduct_2}
            alt="Product 2"
            className="w-[120px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="absolute bottom-4 left-4 w-[490px] h-[226px] ">
          <h3 className=" text-6xl font-semibold text-white">NIKE AIR MAX</h3>
          <p className=" text-2xl font-normal text-white my-5">Nike introducing the new air max for everyone's comfort</p>
          <button className=" bg-blue-500 rounded-md text-white p-2 ">Shop now</button>
        </div>
  
      </div>
  )
}

export default Header