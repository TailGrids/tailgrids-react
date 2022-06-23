import React, { useState } from "react";
import ayroui from "../assets/ayroui.svg";
import graygrids from "../assets/graygrids.svg";
import lineicons from "../assets/lineicons.svg";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="flex items-center w-full bg-white">
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
                  } z-10`}
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
      {/* <!-- ====== Navbar Section End --> */}

      {/* <!-- ====== Hero Section Start --> */}
      <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  Kickstart <br />
                  Startup Website <br />
                  with TailGrids
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
                    >
                      <span className="mr-2">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="11" cy="11" r="11" fill="#3056D3" />
                          <rect
                            x="6.90906"
                            y="13.3636"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="10.1818"
                            y="6"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Download App
                    </a>
                  </li>
                </ul>
                <div className="pt-16 clients">
                  <h6 className="flex items-center mb-2 text-xs font-normal text-body-color">
                    Some Of Our Clients
                    <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                  </h6>
                  <div className="flex items-center">
                    <div className="w-full py-3 mr-4">
                      <img src={lineicons} alt="ayroui" />
                    </div>
                    <div className="w-full py-3 mr-4">
                      <img src={graygrids} alt="graygrids" />
                    </div>
                    <div className="w-full py-3 mr-4">
                      <img src={ayroui} alt="uideck" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://i.ibb.co/H2YhsS4/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ====== Hero Section End -->    */}
    </>
  );
};

export default Hero;
