/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactInfo}>
        <button className={styles.contactButton}>Contact Us</button>
        <div className={styles.phoneContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8029bf7c383093d45b0057ad923cb390f7e35ef495f6a82230ec8e7a65ecbc?placeholderIfAbsent=true&apiKey=bb53bbd52a344e8a9622d9a748e383b4"
            alt="Phone icon"
            className={styles.phoneIcon}
          />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
