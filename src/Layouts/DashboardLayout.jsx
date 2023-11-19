import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/DashboardNavbar";
import SideBar from "../Shared/SideBar";

const DashboardLayout = () => {
    return (
        <>
            <header  className="sticky top-0  inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-transparent bg-opacity-60 border-b text-sm py-2.5 sm:py-4 lg:pl-64 " >
          {/* dashboard navbar */}
                  <Navbar></Navbar>
            </header>
 
        <div className="sticky top-0 inset-x-0 z-20  border-y px-4 sm:px-6 md:px-8 lg:hidden bg-[#91bbcc]">
          <div className="flex items-center py-4">
            
            <button type="button" className="text-white0 hover:text-white" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          
            <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
              <li className="text-sm font-semibold  truncate  text-white" aria-current="page">
                Dashboard
              </li>
            </ol>

          </div>
        </div>
 
          <div id="application-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed lg:top-[70px] md:top-0 top-0 left-0 bottom-0 z-[60] w-64 rounded-tr-[50px] border-r  pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0  scrollbar-y bg-[#457B9D]  border-[#3f667d]" >
            <div className="px-6">
              <Link to="/" className="flex-none text-xl font-semibold  text-white"  aria-label="Brand">school</Link>
            </div>

                <SideBar></SideBar>
          </div>
  
          <div className="w-full pt-4 px-4 bg-[#f4f8fd]  sm:px-6 md:px-8 lg:pl-72">
              <Outlet></Outlet>
          </div>
        </>
    );
};

export default DashboardLayout;