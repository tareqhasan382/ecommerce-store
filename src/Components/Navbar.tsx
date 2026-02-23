import { useState } from "react";
import Container from "./Container";
import Logo from "../assets/Logo.svg";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector((state: RootState) =>
    state.cart.products.reduce((acc, item) => acc + item.quantity, 0)
  );
 const navigate = useNavigate();
  const navTextClass =
    "cursor-pointer font-rubik text-[16px] font-semibold leading-[16px] tracking-normal text-gray-900 transition hover:text-gray-600";

  return (
    <nav className="w-full fixed top-5 left-0 z-50">
      <Container className=" mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 ">
        <div className="flex bg-white h-[96px] items-center justify-between rounded-2xl px-4">

          {/* Hamburger Menu - Mobile only */}
          <button
            className="md:hidden rounded-full p-2 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX className="h-6 w-6 text-gray-700" /> : <FiMenu className="h-6 w-6 text-gray-700" />}
          </button>

          {/* Left Menu - Desktop only */}
          <div className="hidden md:flex items-center gap-8">
            <p className={navTextClass}>New Drop</p>
            <p className={navTextClass}>Men</p>
            <p className={navTextClass}>Women</p>
          </div>

          {/* Middle - Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <img
              src={Logo}
              alt="Logo"
              className="h-[32px] w-[128px] object-contain cursor-pointer"
            />
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Search input - hide on small screens */}
            <div className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search products"
                className="h-10 w-[220px] rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>

            {/* User Icon */}
            <button
              aria-label="User account"
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              <FiUser className="h-5 w-5 text-gray-700" />
            </button>

            {/* Cart Icon */}
            <button
            onClick={() => navigate("/cart")}
              aria-label="Shopping cart"
              className="relative rounded-full p-2 transition hover:bg-gray-100"
            >
              <FiShoppingCart className="h-5 w-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
              
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-xl mt-2 p-4 flex flex-col gap-4">
            <p className={navTextClass}>New Drop</p>
            <p className={navTextClass}>Men</p>
            <p className={navTextClass}>Women</p>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;