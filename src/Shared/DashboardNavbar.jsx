
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/userLogout.js";
import { useEffect } from "react";
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
    const userState = useSelector((state) => state.admin);
    // Logout handler dispatches the logout action
    const logoutHandler = () => {
    dispatch(logout());
  };
   useEffect(() => {
    if (!userState?.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);
 console.log(userState?.userInfo)
    return (
        <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
          <div className="mr-5 lg:mr-0 lg:hidden">
          <Link to="/"className="flex-none text-xl font-semibold  text-white">Home</Link>  
          </div>

          <div className="w-full flex items-center md:justify-end sm:justify-between ml-auto lg:justify-between sm:gap-x-3 sm:order-3">
            <div className="w-full max-w-lg">
                <form className=" sm:flex sm:items-center">
                    <input id="q" name="q" className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-sky-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-Name-500 sm:text-sm" placeholder="Keyword" type="search" value="" />
                        
                    <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
                </form>
            </div>
            
            <div className="flex flex-row items-center justify-end gap-2">

              <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs bg-[#86b0c1]  hover:bg-[#498096] text-white  hover:text-white   ">
                <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white  " 
                  
                  src="https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="Image Description"/>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem]  shadow-md rounded-lg p-2 bg-sky-200   border  border-gray-700" aria-labelledby="hs-dropdown-with-header">
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg  ">
                    <p className="text-sm font-medium text-gray-800">sample</p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                     {userState?.userInfo?( 
                        <button onClick={logoutHandler} 
                          className="flex justify-center items-center gap-2 w-full text-gray-600  tracking-wide font-[Montserrat] bg-sky-50 rounded border-pink-500 border-b-[1px] lg:p-1 p-[3px] lg:text-sm md:text-xs text-[10px] font-medium transition hover:scale-105"
                        >
                      log out
                        </button>
                      ):(<h2>login</h2>)}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;