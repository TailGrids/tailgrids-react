import React from "react";
import Table from "./index";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TdStyle from "./TdStyle";

const Preview = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container">
          <Table
            TableHead={
              <TableHead>
                <th className={TdStyle.ThStyle}> TDH </th>
                <th className={TdStyle.ThStyle}> Duration </th>
                <th className={TdStyle.ThStyle}> Registration </th>
                <th className={TdStyle.ThStyle}> Renewal </th>
                <th className={TdStyle.ThStyle}> Transfer </th>
                <th className={TdStyle.ThStyle}> Register </th>
              </TableHead>
            }
            TableBody={
              <TableBody>
                <tr>
                  <td className={TdStyle.TdStyle}>.com</td>
                  <td className={TdStyle.TdStyle}>1 Year</td>
                  <td className={TdStyle.TdStyle}>$75.00</td>
                  <td className={TdStyle.TdStyle}>$5.00</td>
                  <td className={TdStyle.TdStyle}>$10.00</td>
                  <td className={TdStyle.TdStyle}>
                    <a href="/#" className={TdStyle.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={TdStyle.TdStyle}>.com</td>
                  <td className={TdStyle.TdStyle}>1 Year</td>
                  <td className={TdStyle.TdStyle}>$75.00</td>
                  <td className={TdStyle.TdStyle}>$5.00</td>
                  <td className={TdStyle.TdStyle}>$10.00</td>
                  <td className={TdStyle.TdStyle}>
                    <a href="/#" className={TdStyle.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={TdStyle.TdStyle}>.com</td>
                  <td className={TdStyle.TdStyle}>1 Year</td>
                  <td className={TdStyle.TdStyle}>$75.00</td>
                  <td className={TdStyle.TdStyle}>$5.00</td>
                  <td className={TdStyle.TdStyle}>$10.00</td>
                  <td className={TdStyle.TdStyle}>
                    <a href="/#" className={TdStyle.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={TdStyle.TdStyle}>.com</td>
                  <td className={TdStyle.TdStyle}>1 Year</td>
                  <td className={TdStyle.TdStyle}>$75.00</td>
                  <td className={TdStyle.TdStyle}>$5.00</td>
                  <td className={TdStyle.TdStyle}>$10.00</td>
                  <td className={TdStyle.TdStyle}>
                    <a href="/#" className={TdStyle.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
              </TableBody>
            }
          ></Table>
        </div>
      </section>
    </>
  );
};

export default Preview;
