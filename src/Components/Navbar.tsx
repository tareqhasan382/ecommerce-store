import Container from "./Container";
import Logo from "../assets/Logo.svg";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navTextClass =
    "cursor-pointer font-rubik text-[16px] font-semibold leading-[16px] tracking-normal text-gray-900 transition hover:text-gray-600";

  return (
    <nav className="w-full">
      <Container>
        <div className="flex h-[96px] items-center justify-between rounded-2xl bg-white px-6 shadow-sm">
          
          {/* Left side */}
          <div className="flex items-center gap-8">
            <p className={navTextClass}>New Drop</p>
            <p className={navTextClass}>Men</p>
            <p className={navTextClass}>Women</p>
          </div>

          {/* Middle (Logo) */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Zavisoft Logo"
              className="h-[32px] w-[128px] object-contain cursor-pointer"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            
            {/* Search input */}
            <div className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search products"
                className="h-10 w-[220px] rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>

            {/* User */}
            <button
              aria-label="User account"
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              <FiUser className="h-5 w-5 text-gray-700" />
            </button>

            {/* Cart */}
            <button
              aria-label="Shopping cart"
              className="relative rounded-full p-2 transition hover:bg-gray-100"
            >
              <FiShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                2
              </span>
            </button>

          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
