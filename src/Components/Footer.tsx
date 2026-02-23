import Container from "./Container";
import logo from "../assets/Logo.svg";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-24 font-rubik">
      <Container>

        {/* ================= CTA SECTION ================= */}
        <div className="bg-blue-500 rounded-t-4xl px-6 sm:px-10 py-12
                        flex flex-col lg:flex-row
                        items-start justify-between gap-10">

          {/* Text + Input */}
          <div className="w-full lg:max-w-[520px] lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl
                           font-bold uppercase text-white leading-tight">
              Join our KicksPlus <br /> Club & get 15% off
            </h1>

            <p className="text-white mt-3">
              Sign up for free! Join the community.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md
                           border border-white bg-blue-500
                           text-white placeholder-white
                           focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-2
                                 rounded-md font-semibold
                                 hover:bg-gray-900 transition">
                Submit
              </button>
            </div>
          </div>

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[200px] sm:w-[260px] lg:w-[360px]"
          />
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="bg-black rounded-4xl -mt-10 px-6 sm:px-10 py-16">

          <div className="flex flex-col lg:flex-row gap-14 justify-between">

            {/* About */}
            <div className="lg:max-w-[360px]">
              <h3 className="text-2xl font-semibold text-white mb-4">
                About Us
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We are the biggest hyperstore in the universe.
                We’ve got you covered with our exclusive collections
                and latest drops.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-12">

              {/* Categories */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Categories
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Runners</li>
                  <li>Sneakers</li>
                  <li>Basketball</li>
                  <li>Outdoor</li>
                  <li>Golf</li>
                  <li>Hiking</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Company
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4 text-xl text-white">
                  <FaFacebookF className="hover:text-blue-600 transition" />
                  <RiInstagramFill className="hover:text-pink-500 transition" />
                  <AiFillTwitterCircle className="hover:text-blue-400 transition" />
                  <AiFillTikTok className="hover:text-white transition" />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Logo */}
          <div className="mt-20">
            <img
              src={logo}
              alt="logo"
              className="w-full max-w-[600px] mx-auto opacity-20"
            />
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;