import styles from "../styles/ButtonLabel.module.css";
import React from "react";

const ButtonLabel = (props: { text: string, className?: string, onClick: () => void}) => {
  return (
    <div className={styles.default} onClick={props.onClick}>
      {props.text || "Get Started"}
    </div>
  );
};
export { ButtonLabel }
