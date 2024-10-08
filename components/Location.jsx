/**
 * This code was generated by Builder.io.
 */
import * as React from "react";
import styles from "./Location.module.css";

function Location() {
  return (
    <div className={styles.locationWrapper}>
      <address className={styles.locationText}>
        12th street, Kumarathunga Mawatha, Colombo 07, Sri Lanka
      </address>
      <div className={styles.directions}>Directions &gt;</div>
      <div className={styles.contactInfo}>
        School Office: (011) 234 5567
        <br />
        e-mail: abc@gmail.com
      </div>
      <div className={styles.directions}>Contact Us &gt;</div>
    </div>
  );
}

export default Location;
