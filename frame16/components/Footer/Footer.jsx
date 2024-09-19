/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Course Details",
    "Student Bio",
    "Payments",
    "Login",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <div className={styles.logoPlaceholder} />
          <address className={styles.address}>
            12th street,
            <br />
            Kumarathunga Mawatha,
            <br />
            Colombo 07
            <br />
            Sri Lanka
          </address>
          <a href="#" className={styles.directionsLink}>
            Directions &gt;
          </a>
          <div className={styles.schoolOffice}>
            School Office: <a href="tel:0112345567">(011) 234 5567</a>
            <br />
            e-mail: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </div>
          <a href="#" className={styles.contactLink}>
            Contact Us &gt;
          </a>
        </div>
        <nav className={styles.quickLinks}>
          <h3 className={styles.quickLinksTitle}>Quick links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=bb53bbd52a344e8a9622d9a748e383b4"
        alt=""
        className={styles.footerDivider}
      />
      <div className={styles.copyright}>
        <p>ABC School 2011 | All Rights Reserved</p>
        <p>Website by: Team 1 Frithcode Training Progame</p>
      </div>
    </footer>
  );
};

export default Footer;
