import styles from "../styles/ButtonLabel.module.css";
import React from "react";
var ButtonLabel = function (props) {
    return (React.createElement("div", { className: styles.default, onClick: props.onClick }, props.text || "Get Started"));
};
export { ButtonLabel };
//# sourceMappingURL=ButtonLabel.js.map