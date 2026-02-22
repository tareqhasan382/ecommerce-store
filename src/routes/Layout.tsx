import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-[#e0e0df] overflow-hidden">
      
      {/* Top spacing wrapper */}
      <div className="pt-[102px]">
        <Navbar />
      </div>

      {/* Page content */}
      <main className="mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
      <p className=" w-full flex items-center justify-center my-5 ">© All rights reserved </p>
    </div>
  );
};

export default Layout;
