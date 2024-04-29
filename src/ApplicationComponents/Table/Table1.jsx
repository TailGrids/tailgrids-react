import React from "react";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
};

const Table1 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-primary text-center">
                  <tr>
                    <th className={TdStyle.ThStyle}> TDH </th>
                    <th className={TdStyle.ThStyle}> Duration </th>
                    <th className={TdStyle.ThStyle}> Registration </th>
                    <th className={TdStyle.ThStyle}> Renewal </th>
                    <th className={TdStyle.ThStyle}> Transfer </th>
                    <th className={TdStyle.ThStyle}> Register </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table1;
