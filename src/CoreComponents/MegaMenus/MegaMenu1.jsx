import React, { useState } from "react";

export default function MegaMenu1() {
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <header>
      <div className="bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="#" className="block w-full py-5">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                  alt="logo"
                  className="dark:hidden"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="hidden dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={`  ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[300px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent ${
                    !open && "hidden"
                  }`}
                >
                  <ul className="block lg:flex">
                    <li className="relative">
                      <button
                        onClick={() => setShowMegaMenu(!showMegaMenu)}
                        className="flex w-full items-center justify-between gap-2 py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center dark:text-dark-6 dark:hover:text-white"
                      >
                        Resources
                        <span
                          className={`${showMegaMenu ? "-scale-y-100" : ""} duration-200`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:rounded-xl lg:shadow-lg ${showMegaMenu ? "block" : "hidden"}`}
                      >
                        <div className="rounded-t-xl bg-white p-2 lg:p-8 dark:bg-dark">
                          <div className="mb-8">
                            <h4 className="mb-1 text-base font-medium text-dark dark:text-white">
                              Resources
                            </h4>
                            <p className="text-sm text-body-color dark:text-dark-6">
                              Get started and learn more about our products.
                            </p>
                          </div>

                          <div className="grid gap-y-2 lg:grid-cols-2 lg:gap-x-5">
                            <a
                              href="#"
                              className="group flex flex-col gap-4 rounded-lg p-4 duration-200 hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                            >
                              <div className="text-primary">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_2436_4206)">
                                    <path
                                      d="M12 23.325C9.11255 23.325 6.18755 22.2375 3.97505 20.025C1.83755 17.8875 0.675049 15.0375 0.675049 12C0.675049 8.9625 1.83755 6.1125 4.01255 3.975C6.11255 1.8375 8.96255 0.675003 12 0.675003C15.0375 0.675003 17.8876 1.8375 20.025 4.0125C24.4501 8.4375 24.4501 15.6375 20.025 20.0625C17.8125 22.2375 14.8875 23.325 12 23.325ZM7.95005 20.775C10.5 21.9375 13.4625 21.9375 16.05 20.775L12 16.725L7.95005 20.775ZM4.08755 17.55C4.38755 18 4.76255 18.4125 5.17505 18.825C5.58755 19.2375 6.00005 19.575 6.45005 19.9125L10.5375 15.825C10.0125 15.6375 9.52505 15.3 9.11255 14.8875C8.70005 14.475 8.40005 13.9875 8.17505 13.4625L4.08755 17.55ZM13.4625 15.825L17.55 19.9125C18 19.6125 18.4125 19.2375 18.8251 18.825C19.2375 18.4125 19.575 18 19.9125 17.55L15.825 13.4625C15.6375 13.9875 15.3 14.475 14.8875 14.8875C14.475 15.3 13.9875 15.6 13.4625 15.825ZM3.22505 7.95C2.66255 9.1875 2.32505 10.575 2.32505 12C2.32505 13.425 2.62505 14.775 3.22505 16.05L7.27505 12L3.22505 7.95ZM16.725 12L20.775 16.05C21.9375 13.5 21.9375 10.5375 20.775 7.95L16.725 12ZM12 9.6C11.3625 9.6 10.7625 9.8625 10.3125 10.3125C9.86255 10.7625 9.60005 11.3625 9.60005 12C9.60005 12.6375 9.86255 13.2375 10.3125 13.6875C10.7625 14.1375 11.3625 14.4 12 14.4C12.6375 14.4 13.2375 14.1375 13.6875 13.6875C14.1375 13.2375 14.4 12.6375 14.4 12C14.4 11.3625 14.1375 10.7625 13.6875 10.3125C13.2375 9.8625 12.6375 9.6 12 9.6ZM4.08755 6.45L8.17505 10.5375C8.36255 10.0125 8.70005 9.525 9.11255 9.1125C9.52505 8.7 10.0125 8.4 10.5375 8.175L6.45005 4.0875C6.00005 4.3875 5.58755 4.7625 5.17505 5.175C4.76255 5.5875 4.42505 6 4.08755 6.45ZM14.8875 9.1125C15.3 9.525 15.6 10.0125 15.825 10.5375L19.9125 6.45C19.6125 6 19.2375 5.5875 18.8251 5.175C18.4125 4.7625 18 4.425 17.55 4.0875L13.4625 8.175C13.9875 8.4 14.475 8.7 14.8875 9.1125ZM7.95005 3.225L12 7.275L16.05 3.225C14.8125 2.6625 13.425 2.325 12 2.325C10.575 2.325 9.22505 2.6625 7.95005 3.225Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2436_4206">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>
                                <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                                  About Company
                                </h3>
                                <p className="text-sm text-body-color dark:text-dark-6">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="group flex flex-col gap-4 rounded-lg p-4 duration-200 hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                            >
                              <div className="text-primary">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.35 3.5625H7.65005C3.78755 3.5625 0.675049 6.675 0.675049 10.5375V18.15C0.675049 19.3875 1.68755 20.4 2.92505 20.4H16.3875C20.25 20.4 23.3625 17.2875 23.3625 13.425V10.5375C23.3625 6.7125 20.2125 3.5625 16.35 3.5625ZM21.675 13.4625C21.675 16.3875 19.3125 18.75 16.3875 18.75H2.92505C2.62505 18.75 2.36255 18.4875 2.36255 18.1875V10.5375C2.36255 7.6125 4.72505 5.25 7.65005 5.25H16.3875C19.3125 5.25 21.675 7.6125 21.675 10.5375V13.4625Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M6.48755 12.9375C7.00532 12.9375 7.42505 12.5178 7.42505 12C7.42505 11.4822 7.00532 11.0625 6.48755 11.0625C5.96978 11.0625 5.55005 11.4822 5.55005 12C5.55005 12.5178 5.96978 12.9375 6.48755 12.9375Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12 12.9375C12.5178 12.9375 12.9375 12.5178 12.9375 12C12.9375 11.4822 12.5178 11.0625 12 11.0625C11.4822 11.0625 11.0625 11.4822 11.0625 12C11.0625 12.5178 11.4822 12.9375 12 12.9375Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M17.5125 12.9375C18.0302 12.9375 18.45 12.5178 18.45 12C18.45 11.4822 18.0302 11.0625 17.5125 11.0625C16.9947 11.0625 16.575 11.4822 16.575 12C16.575 12.5178 16.9947 12.9375 17.5125 12.9375Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                                  Help Center
                                </h3>
                                <p className="text-sm text-body-color dark:text-dark-6">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="group flex flex-col gap-4 rounded-lg p-4 duration-200 hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                            >
                              <div className="text-primary">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.9374 23.3625H7.4999C5.7749 23.3625 4.3124 22.05 4.1249 20.3625C4.1249 20.2875 4.0874 20.25 4.0874 20.175V2.96249C4.0874 1.68749 5.0999 0.674988 6.3749 0.674988H17.5499C18.8249 0.674988 19.8374 1.68749 19.8374 2.96249V16.0125C19.8374 17.2875 18.8249 18.3 17.5499 18.3H7.4999C7.0499 18.3 6.5999 18.4875 6.2999 18.7875C5.9624 19.0875 5.8124 19.5375 5.8124 19.9875C5.8124 20.925 6.5624 21.675 7.4999 21.675H18.9374C19.3874 21.675 19.7999 22.05 19.7999 22.5375C19.7999 23.025 19.4249 23.3625 18.9374 23.3625ZM6.4124 2.36249C6.0749 2.36249 5.8124 2.62499 5.8124 2.96249V17.0625C6.3374 16.7625 6.8999 16.6125 7.4999 16.6125H17.5874C17.9249 16.6125 18.1874 16.35 18.1874 16.0125V2.96249C18.1874 2.62499 17.9249 2.36249 17.5874 2.36249H6.4124Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14.7 6.6H9.37495C8.92495 6.6 8.51245 6.225 8.51245 5.7375C8.51245 5.25 8.88745 4.875 9.37495 4.875H14.7C15.15 4.875 15.5625 5.25 15.5625 5.7375C15.5625 6.225 15.1875 6.6 14.7 6.6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                                  Read Blog
                                </h3>
                                <p className="text-sm text-body-color dark:text-dark-6">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="group flex flex-col gap-4 rounded-lg p-4 duration-200 hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                            >
                              <div className="text-primary">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.5875 6.22499L15.4125 1.12499C15.1125 0.824988 14.7 0.674988 14.2875 0.674988H5.28755C4.01255 0.674988 2.92505 1.72499 2.92505 3.03749V21.0375C2.92505 22.3125 3.97505 23.4 5.28755 23.4H18.675C19.95 23.4 21.0375 22.35 21.0375 21.0375V7.34999C21.0375 6.93749 20.8876 6.52499 20.5875 6.22499ZM15.45 3.52499L18.2625 6.29999H15.45V3.52499ZM18.7125 21.675H5.28755C4.91255 21.675 4.61255 21.375 4.61255 21V2.99999C4.61255 2.62499 4.91255 2.32499 5.28755 2.32499H13.7625V7.12499C13.7625 7.57499 14.1375 7.98749 14.625 7.98749H19.3876V21C19.35 21.375 19.05 21.675 18.7125 21.675Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14.5875 10.9125H8.10005C7.65005 10.9125 7.23755 11.2875 7.23755 11.775C7.23755 12.2625 7.61255 12.6375 8.10005 12.6375H14.5875C15.0375 12.6375 15.45 12.2625 15.45 11.775C15.45 11.2875 15.075 10.9125 14.5875 10.9125Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M14.5875 15.0375H8.10005C7.65005 15.0375 7.23755 15.4125 7.23755 15.9C7.23755 16.3875 7.61255 16.7625 8.10005 16.7625H14.5875C15.0375 16.7625 15.45 16.3875 15.45 15.9C15.45 15.4125 15.075 15.0375 14.5875 15.0375Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                                  Documentation
                                </h3>
                                <p className="text-sm text-body-color dark:text-dark-6">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="rounded-b-xl bg-primary/5 px-8 py-[18px]">
                          <a
                            href="#"
                            className="flex w-full items-center justify-center gap-2 text-base font-medium text-primary"
                          >
                            Learn More
                            <span>
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.5 9.5L12.0312 2.9375C11.75 2.65625 11.3125 2.65625 11.0312 2.9375C10.75 3.21875 10.75 3.65625 11.0312 3.9375L16.2812 9.28125H3C2.625 9.28125 2.3125 9.59375 2.3125 9.96875C2.3125 10.3438 2.625 10.6875 3 10.6875H16.3437L11.0312 16.0938C10.75 16.375 10.75 16.8125 11.0312 17.0938C11.1562 17.2188 11.3437 17.2812 11.5312 17.2812C11.7187 17.2812 11.9062 17.2188 12.0312 17.0625L18.5 10.5C18.7812 10.2187 18.7812 9.78125 18.5 9.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                      >
                        Features
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0">
                <a
                  href="#"
                  className="rounded-lg bg-gray-2 px-5 py-2.5 text-base font-medium text-dark hover:text-primary dark:bg-white/5 dark:text-white"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-primary px-5 py-2.5 text-base font-medium text-white hover:bg-primary/90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
