import React, { useState } from "react";

export default function MegaMenu2() {
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
                        className={`w-full rounded-xl bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:p-8 lg:shadow-lg dark:bg-dark ${showMegaMenu ? "block" : "hidden"}`}
                      >
                        <div className="grid gap-5 lg:grid-cols-2">
                          <div>
                            <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white">
                              Get Started
                            </h4>
                            <div className="space-y-2">
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
                                      d="M11.4 7.72501H13.9875C14.4375 7.72501 14.8125 7.35001 14.8125 6.90001C14.8125 6.45001 14.4375 6.07501 13.9875 6.07501H13.2375V5.73751C13.2375 5.28751 12.8625 4.91251 12.4125 4.91251C11.9625 4.91251 11.5875 5.28751 11.5875 5.73751V6.07501H11.4375C10.2 6.07501 9.1875 7.08751 9.1875 8.28751C9.1875 9.52501 10.2 10.5 11.4375 10.5H12.6375C12.9375 10.5 13.2 10.7625 13.2 11.025C13.2 11.2875 12.9375 11.55 12.6375 11.55H10.05C9.6 11.55 9.225 11.925 9.225 12.375C9.225 12.825 9.6 13.2 10.05 13.2H11.5875V13.5375C11.5875 13.9875 11.9625 14.3625 12.4125 14.3625C12.8625 14.3625 13.2375 13.9875 13.2375 13.5375V13.0875C14.175 12.825 14.85 11.9625 14.85 10.95C14.85 9.71251 13.8375 8.73751 12.6 8.73751H11.4C11.1 8.73751 10.8375 8.51251 10.8375 8.21251C10.8375 7.91251 11.1 7.72501 11.4 7.72501Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M20.9998 1.27499H2.9998C1.7248 1.27499 0.674805 2.32499 0.674805 3.59999V15.1125C0.674805 16.3875 1.7248 17.4375 2.9998 17.4375H11.1748V21H8.13731C7.68731 21 7.3123 21.375 7.3123 21.825C7.3123 22.275 7.68731 22.65 8.13731 22.65H15.8998C16.3498 22.65 16.7248 22.275 16.7248 21.825C16.7248 21.375 16.3498 21 15.8998 21H12.8623V17.4375H20.9998C22.2748 17.4375 23.3248 16.3875 23.3248 15.1125V3.59999C23.3623 2.32499 22.2748 1.27499 20.9998 1.27499ZM21.6748 15.15C21.6748 15.525 21.3748 15.825 20.9998 15.825H2.9998C2.6248 15.825 2.3248 15.525 2.3248 15.15V3.59999C2.3248 3.22499 2.6248 2.92499 2.9998 2.92499H20.9998C21.3748 2.92499 21.6748 3.22499 21.6748 3.59999V15.15Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                                    Our Pricing
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
                                      d="M14.6997 6.6H9.37471C8.92471 6.6 8.51221 6.225 8.51221 5.7375C8.51221 5.25 8.88721 4.875 9.37471 4.875H14.6997C15.1497 4.875 15.5622 5.25 15.5622 5.7375C15.5622 6.225 15.1872 6.6 14.6997 6.6Z"
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
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white">
                              Support
                            </h4>
                            <div className="space-y-2">
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
                                      d="M16.3498 3.5625H7.64981C3.7873 3.5625 0.674805 6.675 0.674805 10.5375V18.15C0.674805 19.3875 1.6873 20.4 2.9248 20.4H16.3873C20.2498 20.4 23.3623 17.2875 23.3623 13.425V10.5375C23.3623 6.7125 20.2123 3.5625 16.3498 3.5625ZM21.6748 13.4625C21.6748 16.3875 19.3123 18.75 16.3873 18.75H2.9248C2.6248 18.75 2.3623 18.4875 2.3623 18.1875V10.5375C2.3623 7.6125 4.7248 5.25 7.64981 5.25H16.3873C19.3123 5.25 21.6748 7.6125 21.6748 10.5375V13.4625Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M6.4873 12.9375C7.00507 12.9375 7.4248 12.5178 7.4248 12C7.4248 11.4822 7.00507 11.0625 6.4873 11.0625C5.96954 11.0625 5.5498 11.4822 5.5498 12C5.5498 12.5178 5.96954 12.9375 6.4873 12.9375Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M12 12.9375C12.5178 12.9375 12.9375 12.5178 12.9375 12C12.9375 11.4822 12.5178 11.0625 12 11.0625C11.4822 11.0625 11.0625 11.4822 11.0625 12C11.0625 12.5178 11.4822 12.9375 12 12.9375Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M17.5122 12.9375C18.03 12.9375 18.4497 12.5178 18.4497 12C18.4497 11.4822 18.03 11.0625 17.5122 11.0625C16.9944 11.0625 16.5747 11.4822 16.5747 12C16.5747 12.5178 16.9944 12.9375 17.5122 12.9375Z"
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
                                      d="M20.5873 6.22499L15.4123 1.12499C15.1123 0.824988 14.6998 0.674988 14.2873 0.674988H5.2873C4.0123 0.674988 2.9248 1.72499 2.9248 3.03749V21.0375C2.9248 22.3125 3.9748 23.4 5.2873 23.4H18.6748C19.9498 23.4 21.0373 22.35 21.0373 21.0375V7.34999C21.0373 6.93749 20.8873 6.52499 20.5873 6.22499ZM15.4498 3.52499L18.2623 6.29999H15.4498V3.52499ZM18.7123 21.675H5.2873C4.9123 21.675 4.6123 21.375 4.6123 21V2.99999C4.6123 2.62499 4.9123 2.32499 5.2873 2.32499H13.7623V7.12499C13.7623 7.57499 14.1373 7.98749 14.6248 7.98749H19.3873V21C19.3498 21.375 19.0498 21.675 18.7123 21.675Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M14.5873 10.9125H8.09981C7.64981 10.9125 7.2373 11.2875 7.2373 11.775C7.2373 12.2625 7.61231 12.6375 8.09981 12.6375H14.5873C15.0373 12.6375 15.4498 12.2625 15.4498 11.775C15.4498 11.2875 15.0748 10.9125 14.5873 10.9125Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M14.5873 15.0375H8.09981C7.64981 15.0375 7.2373 15.4125 7.2373 15.9C7.2373 16.3875 7.61231 16.7625 8.09981 16.7625H14.5873C15.0373 16.7625 15.4498 16.3875 15.4498 15.9C15.4498 15.4125 15.0748 15.0375 14.5873 15.0375Z"
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
                                      d="M12 10.5C9.1875 10.5 6.9375 8.28749 6.9375 5.58749C6.9375 2.88749 9.1875 0.674988 12 0.674988C14.8125 0.674988 17.0625 2.88749 17.0625 5.58749C17.0625 8.28749 14.8125 10.5 12 10.5ZM12 2.36249C10.125 2.36249 8.625 3.82499 8.625 5.58749C8.625 7.34999 10.125 8.81249 12 8.81249C13.875 8.81249 15.375 7.34999 15.375 5.58749C15.375 3.82499 13.875 2.36249 12 2.36249Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M19.9126 23.3625C19.4626 23.3625 19.0501 22.9875 19.0501 22.5V21.4125C19.0501 17.5125 15.9001 14.3625 12.0001 14.3625C8.1001 14.3625 4.9501 17.5125 4.9501 21.4125V22.5C4.9501 22.95 4.5751 23.3625 4.0876 23.3625C3.6001 23.3625 3.2251 22.9875 3.2251 22.5V21.4125C3.2251 16.575 7.1626 12.675 11.9626 12.675C16.7626 12.675 20.7001 16.6125 20.7001 21.4125V22.5C20.7376 22.95 20.3626 23.3625 19.9126 23.3625Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="mb-1 text-base font-semibold text-dark duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                                    Manage Accounts
                                  </h3>
                                  <p className="text-sm text-body-color dark:text-dark-6">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
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
