import React from "react";
import styles from "../styles/LabelField.module.css";
var LabelField = function (props) {
    return (React.createElement("div", { className: "".concat(styles.label, " ").concat(props.className || "") },
        React.createElement("span", null, props.label)));
};
export { LabelField };
//# sourceMappingURL=LabelField.js.map