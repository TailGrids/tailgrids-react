import React from "react";
import Tablies from "../Tablies";
import Tbody from "./Tbody";
import { styles } from "./TdStyle";
import Thead from "./Thead";

const Preview = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container">
          <Tablies
            Thead={
              <Thead>
                <th className={styles.ThStyle}> TDH </th>
                <th className={styles.ThStyle}> Duration </th>
                <th className={styles.ThStyle}> Registration </th>
                <th className={styles.ThStyle}> Renewal </th>
                <th className={styles.ThStyle}> Transfer </th>
                <th className={styles.ThStyle}> Register </th>
              </Thead>
            }
            Tbody={
              <Tbody>
                <tr>
                  <td className={styles.TdStyle}>.com</td>
                  <td className={styles.TdStyle}>1 Year</td>
                  <td className={styles.TdStyle}>$75.00</td>
                  <td className={styles.TdStyle}>$5.00</td>
                  <td className={styles.TdStyle}>$10.00</td>
                  <td className={styles.TdStyle}>
                    <a href="/#" className={styles.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={styles.TdStyle}>.com</td>
                  <td className={styles.TdStyle}>1 Year</td>
                  <td className={styles.TdStyle}>$75.00</td>
                  <td className={styles.TdStyle}>$5.00</td>
                  <td className={styles.TdStyle}>$10.00</td>
                  <td className={styles.TdStyle}>
                    <a href="/#" className={styles.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={styles.TdStyle}>.com</td>
                  <td className={styles.TdStyle}>1 Year</td>
                  <td className={styles.TdStyle}>$75.00</td>
                  <td className={styles.TdStyle}>$5.00</td>
                  <td className={styles.TdStyle}>$10.00</td>
                  <td className={styles.TdStyle}>
                    <a href="/#" className={styles.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={styles.TdStyle}>.com</td>
                  <td className={styles.TdStyle}>1 Year</td>
                  <td className={styles.TdStyle}>$75.00</td>
                  <td className={styles.TdStyle}>$5.00</td>
                  <td className={styles.TdStyle}>$10.00</td>
                  <td className={styles.TdStyle}>
                    <a href="/#" className={styles.TdButton}>
                      Sign Up
                    </a>
                  </td>
                </tr>
              </Tbody>
            }
          ></Tablies>
        </div>
      </section>
    </>
  );
};

export default Preview;
