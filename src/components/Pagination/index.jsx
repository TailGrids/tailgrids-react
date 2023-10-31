import React from "react";

const Pagination = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="inline-flex rounded-xl border border-stroke bg-white p-4 dark:border-dark-3 dark:bg-dark-2">
                <ul className="-mx-[6px] flex items-center">
                  <li className="px-[6px]">
                    <a
                      href="/#"
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                    >
                      <span>
                        <svg
                          width={8}
                          height={15}
                          viewBox="0 0 8 15"
                          className="fill-current stroke-current"
                        >
                          <path
                            d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>

                  <PageLink count="1" pageSrc="/#" />
                  <PageLink count="2" pageSrc="/#" />
                  <PageLink count="3" pageSrc="/#" />
                  <PageLink count="4" pageSrc="/#" />
                  <PageLink count="5" pageSrc="/#" />
                  <PageLink count="6" pageSrc="/#" />

                  <li className="px-[6px]">
                    <a
                      href="/#"
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                    >
                      <span>
                        <svg
                          width={8}
                          height={15}
                          viewBox="0 0 8 15"
                          className="fill-current stroke-current"
                        >
                          <path
                            d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;

const PageLink = ({ pageSrc, count }) => {
  return (
    <>
      <li className="px-[6px]">
        <a
          href={pageSrc}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
        >
          {count}
        </a>
      </li>
    </>
  );
};
