 import styles from "../styles/SpinnerComponent.module.css";
 import React from "react";
 
function SpinnerComponent() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <div className={styles.message}>Fetching your session...</div>
    </div>
  );
}

export { SpinnerComponent };