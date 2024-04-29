import React, { useState } from "react";

const Tab3 = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="w-full mb-14">
              <div className="flex flex-wrap bg-[#FAFAFA]">
                <button
                  onClick={() => handleTabOpen("home")}
                  className={`flex items-center border-b-2 py-3 px-6 text-sm font-medium md:text-base lg:py-4 lg:px-10 ${
                    open === "home"
                      ? "border-primary text-primary"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="text-primary mr-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M14.3008 15.7H10.9258C10.1758 15.7 9.55078 15.075 9.55078 14.325V11.575C9.55078 11.3 9.32578 11.075 9.05078 11.075H6.97578C6.70078 11.075 6.47578 11.3 6.47578 11.575V14.3C6.47578 15.05 5.85078 15.675 5.10078 15.675H1.67578C0.925781 15.675 0.300781 15.05 0.300781 14.3V5.57501C0.300781 5.20001 0.500781 4.85001 0.825781 4.65001L7.42578 0.475009C7.77578 0.250009 8.25078 0.250009 8.60078 0.475009L15.2008 4.65001C15.5258 4.85001 15.7008 5.20001 15.7008 5.57501V14.275C15.7008 15.075 15.0758 15.7 14.3008 15.7ZM6.95078 10.2H9.02578C9.77578 10.2 10.4008 10.825 10.4008 11.575V14.3C10.4008 14.575 10.6258 14.8 10.9008 14.8H14.3008C14.5758 14.8 14.8008 14.575 14.8008 14.3V5.60001C14.8008 5.52501 14.7508 5.45001 14.7008 5.40001L8.12578 1.22501C8.05078 1.17501 7.95078 1.17501 7.90078 1.22501L1.30078 5.40001C1.22578 5.45001 1.20078 5.52501 1.20078 5.60001V14.325C1.20078 14.6 1.42578 14.825 1.70078 14.825H5.10078C5.37578 14.825 5.60078 14.6 5.60078 14.325V11.575C5.57578 10.825 6.20078 10.2 6.95078 10.2Z"></path>
                    </svg>
                  </span>
                  Home
                </button>
                <button
                  onClick={() => handleTabOpen("about")}
                  className={`flex items-center border-b-2 py-3 px-6 text-sm font-medium md:text-base lg:py-4 lg:px-10 ${
                    open === "about"
                      ? "border-primary text-primary"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="text-primary mr-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M15.9453 2.86562H12.3734C12.0922 1.62812 10.8547 0.671875 9.39219 0.671875H8.54844C7.05781 0.671875 5.82031 1.62812 5.56719 2.86562H1.96719C1.06719 2.86562 0.335938 3.59688 0.335938 4.49688V11.725C0.335938 12.625 1.06719 13.3562 1.96719 13.3562H15.9453C16.8453 13.3562 17.5766 12.625 17.5766 11.725V4.46875C17.5766 3.59687 16.8453 2.86562 15.9453 2.86562ZM8.54844 1.65625H9.39219C10.3203 1.65625 11.1078 2.1625 11.3609 2.86562H6.57969C6.83281 2.1625 7.62031 1.65625 8.54844 1.65625ZM1.96719 3.85H15.9453C16.2828 3.85 16.5922 4.13125 16.5922 4.49688V6.71875L9.53281 8.0125C9.42031 8.04062 9.27969 8.04062 9.16719 8.0125L1.34844 6.55V4.46875C1.34844 4.13125 1.62969 3.85 1.96719 3.85ZM15.9453 12.3438H1.96719C1.62969 12.3438 1.32031 12.0625 1.32031 11.6969V7.5625L8.97031 8.96875C9.08281 8.99687 9.22344 8.99687 9.33594 8.99687C9.44844 8.99687 9.58906 8.99687 9.70156 8.96875L16.5922 7.70312V11.6969C16.5922 12.0625 16.3109 12.3438 15.9453 12.3438Z"></path>
                    </svg>
                  </span>
                  About Us
                </button>
                <button
                  onClick={() => handleTabOpen("team")}
                  className={`flex items-center border-b-2 py-3 px-6 text-sm font-medium md:text-base lg:py-4 lg:px-10 ${
                    open === "team"
                      ? "border-primary text-primary"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="text-primary mr-2">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      className="fill-current"
                    >
                      <path d="M6.04922 7.23751C7.96172 7.23751 9.50859 5.69063 9.50859 3.77813C9.50859 1.86563 7.96172 0.318756 6.04922 0.318756C4.13672 0.318756 2.58984 1.86563 2.58984 3.77813C2.58984 5.69063 4.13672 7.23751 6.04922 7.23751ZM6.04922 1.30313C7.39922 1.30313 8.52422 2.40001 8.52422 3.77813C8.52422 5.15626 7.42734 6.25313 6.04922 6.25313C4.67109 6.25313 3.57422 5.15626 3.57422 3.77813C3.57422 2.40001 4.67109 1.30313 6.04922 1.30313Z"></path>
                      <path d="M6.04766 8.47501C3.99453 8.47501 2.02578 9.31876 0.507031 10.8375C0.310156 11.0344 0.310156 11.3438 0.507031 11.5406C0.591406 11.625 0.732031 11.6813 0.844531 11.6813C0.985156 11.6813 1.09766 11.625 1.18203 11.5406C2.50391 10.1906 4.21953 9.45938 6.01953 9.45938C7.79141 9.45938 9.50703 10.1906 10.857 11.5406C11.0539 11.7375 11.3633 11.7375 11.5602 11.5406C11.757 11.3438 11.757 11.0344 11.5602 10.8375C10.0414 9.31876 8.07266 8.47501 6.04766 8.47501Z"></path>
                      <path d="M13.4453 7.23752C14.5422 7.23752 15.4141 6.33752 15.4141 5.26877C15.4141 4.20002 14.5141 3.30002 13.4453 3.30002C12.3766 3.30002 11.4766 4.20002 11.4766 5.26877C11.4766 6.33752 12.3484 7.23752 13.4453 7.23752ZM13.4453 4.25627C13.9797 4.25627 14.4297 4.70627 14.4297 5.24064C14.4297 5.77502 13.9797 6.22502 13.4453 6.22502C12.9109 6.22502 12.4609 5.77502 12.4609 5.24064C12.4609 4.70627 12.9109 4.25627 13.4453 4.25627Z"></path>
                      <path d="M17.4944 10.0781C16.0038 8.67189 13.9226 8.13751 11.8413 8.67189C11.5882 8.72814 11.4194 9.00939 11.4757 9.26251C11.5319 9.51564 11.8132 9.68439 12.0663 9.62814C13.8101 9.17814 15.5538 9.62814 16.7913 10.8094C16.8757 10.8938 17.0163 10.95 17.1288 10.95C17.2694 10.95 17.3819 10.8938 17.4944 10.7813C17.6913 10.5844 17.6913 10.275 17.4944 10.0781Z"></path>
                    </svg>
                  </span>
                  Our Team
                </button>
                <button
                  onClick={() => handleTabOpen("company")}
                  className={`flex items-center border-b-2 py-3 px-6 text-sm font-medium md:text-base lg:py-4 lg:px-10 ${
                    open === "company"
                      ? "border-primary text-primary"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="text-primary mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      className="fill-current"
                    >
                      <path d="M16.3109 0.365631H9.11094C8.37969 0.365631 7.78906 0.956256 7.78906 1.71563V3.34688H1.68594C0.954688 3.34688 0.335938 3.93751 0.335938 4.69688V16.3125C0.335938 17.0438 0.926563 17.6625 1.68594 17.6625H7.76094H8.74531H16.3109C17.0422 17.6625 17.6609 17.0719 17.6609 16.3125V1.68751C17.6609 0.956256 17.0422 0.365631 16.3109 0.365631ZM7.76094 16.6781H1.68594C1.48906 16.6781 1.32031 16.5094 1.32031 16.3125V4.64063C1.32031 4.44376 1.48906 4.27501 1.68594 4.27501H7.76094V16.6781ZM16.6766 16.3125C16.6766 16.5094 16.5078 16.6781 16.3109 16.6781H8.74531V4.07813V1.68751C8.74531 1.49063 8.91406 1.32188 9.08281 1.32188H16.3109C16.5078 1.32188 16.6766 1.49063 16.6766 1.68751V16.3125Z"></path>
                      <path d="M2.58594 8.55001H3.79531C3.87969 8.55001 3.93594 8.49376 3.93594 8.40939V7.20001C3.93594 7.11564 3.87969 7.05939 3.79531 7.05939H2.58594C2.50156 7.05939 2.44531 7.11564 2.44531 7.20001V8.40939C2.44531 8.49376 2.50156 8.55001 2.58594 8.55001Z"></path>
                      <path d="M5.42578 8.55001H6.63516C6.71953 8.55001 6.77578 8.49376 6.77578 8.40939V7.20001C6.77578 7.11564 6.71953 7.05939 6.63516 7.05939H5.42578C5.34141 7.05939 5.28516 7.11564 5.28516 7.20001V8.40939C5.28516 8.49376 5.34141 8.55001 5.42578 8.55001Z"></path>
                      <path d="M2.58594 12.6281H3.79531C3.87969 12.6281 3.93594 12.5719 3.93594 12.4875V11.2781C3.93594 11.1938 3.87969 11.1375 3.79531 11.1375H2.58594C2.50156 11.1375 2.44531 11.1938 2.44531 11.2781V12.4875C2.44531 12.5438 2.50156 12.6281 2.58594 12.6281Z"></path>
                      <path d="M5.42578 12.6281H6.63516C6.71953 12.6281 6.77578 12.5719 6.77578 12.4875V11.2781C6.77578 11.1938 6.71953 11.1375 6.63516 11.1375H5.42578C5.34141 11.1375 5.28516 11.1938 5.28516 11.2781V12.4875C5.28516 12.5438 5.34141 12.6281 5.42578 12.6281Z"></path>
                      <path d="M11.8109 3.40314H10.6016C10.5172 3.40314 10.4609 3.45939 10.4609 3.54376V4.75314C10.4609 4.83751 10.5172 4.89376 10.6016 4.89376H11.8109C11.8953 4.89376 11.9516 4.83751 11.9516 4.75314V3.54376C11.9516 3.48751 11.8953 3.40314 11.8109 3.40314Z"></path>
                      <path d="M14.7914 3.40314H13.582C13.4977 3.40314 13.4414 3.45939 13.4414 3.54376V4.75314C13.4414 4.83751 13.4977 4.89376 13.582 4.89376H14.7914C14.8758 4.89376 14.932 4.83751 14.932 4.75314V3.54376C14.932 3.48751 14.8758 3.40314 14.7914 3.40314Z"></path>
                      <path d="M11.8109 7.425H10.6016C10.5172 7.425 10.4609 7.48125 10.4609 7.56563V8.775C10.4609 8.85938 10.5172 8.91563 10.6016 8.91563H11.8109C11.8953 8.91563 11.9516 8.85938 11.9516 8.775V7.56563C11.9516 7.48125 11.8953 7.425 11.8109 7.425Z"></path>
                      <path d="M14.7914 7.425H13.582C13.4977 7.425 13.4414 7.48125 13.4414 7.56563V8.775C13.4414 8.85938 13.4977 8.91563 13.582 8.91563H14.7914C14.8758 8.91563 14.932 8.85938 14.932 8.775V7.56563C14.932 7.48125 14.8758 7.425 14.7914 7.425Z"></path>
                      <path d="M11.8109 11.4469H10.6016C10.5172 11.4469 10.4609 11.5031 10.4609 11.5875V12.7969C10.4609 12.8813 10.5172 12.9375 10.6016 12.9375H11.8109C11.8953 12.9375 11.9516 12.8813 11.9516 12.7969V11.5875C11.9516 11.5031 11.8953 11.4469 11.8109 11.4469Z"></path>
                      <path d="M14.7914 11.4469H13.582C13.4977 11.4469 13.4414 11.5031 13.4414 11.5875V12.7969C13.4414 12.8813 13.4977 12.9375 13.582 12.9375H14.7914C14.8758 12.9375 14.932 12.8813 14.932 12.7969V11.5875C14.932 11.5031 14.8758 11.4469 14.7914 11.4469Z"></path>
                    </svg>
                  </span>
                  Company Details
                </button>
              </div>
              <TabContent
                details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="home"
                open={open}
              />
              <TabContent
                details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! "
                tabCategory="about"
                open={open}
              />
              <TabContent
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?"
                tabCategory="team"
                open={open}
              />
              <TabContent
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="company"
                open={open}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab3;

const TabContent = ({ open, tabCategory, details }) => {
  return (
    <div>
      <div
        className={`text-body-color p-6 text-base leading-relaxed ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};
