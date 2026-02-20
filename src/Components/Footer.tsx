import Container from "./Container"
import logo from "../assets/Logo.svg"
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className=" mt-20 ">
          <div className=" bg-blue-500 flex items-center justify-around w-full h-[350px] rounded-t-4xl p-10 ">
            <div>
              <div>
                <h1 className=" text-4xl font-bold uppercase text-white ">Join our KicksPlus <br /> Club & get 15% off</h1>
                <p className=" text-white my-3 ">Sign up for free! Join the community.</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-white bg-blue-500 placeholder-white text-white focus:outline-none focus:ring-0"
                />
                <button className="bg-black text-white rounded-md px-4 py-2 font-semibold hover:bg-gray-900 transition">
                  Submit
                </button>
              </div>
            </div>
            <div>
              <img src={logo} alt="logo" className=" w-[367px] h-[112px] " />
            </div>
          </div>
          <div className=" bg-black w-full h-[540px] rounded-4xl -mt-10 overflow-hidden">
            <div className=" px-8 flex items-start justify-between mt-[40px] ">
              <div className=" w-[446px] bg-amber-900 text-white">
                <h3 className="text-3xl font-semibold mb-4">About Us</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are the biggest hyperstore in the universe. We’ve got you covered with our exclusive collections and latest drops.
                </p>
              </div>
              <div className=" bg-amber-700 w-[664px] flex items-start justify-around ">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Runners</li>
                    <li>Sneakers</li>
                    <li>Basketball</li>
                    <li>Outdoor</li>
                    <li>Golf</li>
                    <li>Hiking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                  </ul>
                </div>
                {/* Social Icons */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex items-center gap-4 text-white text-xl">
                    <FaFacebookF className="hover:text-blue-600 transition" />
                    <RiInstagramFill className="hover:text-pink-500 transition" />
                    <AiFillTwitterCircle className="hover:text-blue-400 transition" />
                    <AiFillTikTok className="hover:text-white transition" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={logo} alt="logo" color="#ffff" className=" w-full h-[900] object-contain px-8 mt-20 " />
            </div>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer