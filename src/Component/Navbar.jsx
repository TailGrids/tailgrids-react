import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header
        x-data="
        {
          navbarOpen: false
        }
      "
        className="flex items-center w-full bg-white"
      >
        <div className="container">
          <div className="relative flex items-center justify-between -mx-4">
            <div className="max-w-full px-4 w-60">
              <a href="/#" className="block w-full py-5">
                <img
                  src="assets/images/logo/logo.svg"
                  alt="logo"
                  className="w-full"
                />
              </a>
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <div>
                <button
                  // @click="navbarOpen = !navbarOpen"
                  onClick={() => setOpen(!open)}
                  // :className="navbarOpen && 'navbarTogglerActive' "
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="blcok lg:flex">
                    <li>
                      <a
                        href="/#"
                        className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                      >
                        Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                      >
                        Features
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                <a
                  href="/#"
                  className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
                >
                  Login
                </a>
                <a
                  href="/#"
                  className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ====== Navbar Section End -->    */}
    </>
  );
};

export default Navbar;
