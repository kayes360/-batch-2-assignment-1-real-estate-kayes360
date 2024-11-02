import React, { useState } from "react";
import Logo from "../assets/images/logo/logo.svg";
import { MenuIcon } from "../Components/SVGIcons";
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex flex-wrap w-full items-center justify-between px-4 py-3">
              <a
                href="index.html"
                className="navbar-logo block w-48 md:w-60 max-w-full px-4"
              >
                <img src={Logo} alt="logo" className="header-logo h-12" />
              </a>

              <ul className="hidden lg:flex ">
                <li className="group relative">
                  <a
                    href="#home"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  >
                    Home
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#about"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    About
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#pricing"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    Pricing
                  </a>
                </li>

                <li className="group relative">
                  <a
                    href="blog-grids.html"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <div className="hidden lg:flex ">
                <a
                  href="signin.html"
                  className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <a
                  href="signup.html"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Sign Up
                </a>
              </div>

              <div
                className="flex lg:hidden cursor-pointer"
                onClick={handleMobileMenu}
              >
                <MenuIcon />
              </div>

              {/* mobile menu */}
              <div
                className={`bg-primary justify-between items-center w-full h-screen  lg:w-auto   ${
                  showMenu ? "" : "hidden"
                }`}
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white bg-primary-700  border-b border-gray-100 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="flex my-2">
                    <a
                      href="signin.html"
                      className="block loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                    >
                      Sign In
                    </a>
                    <a
                      href="signup.html"
                      className="signUpBtn block rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>

              {/* mobile menu end*/}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  );
}
