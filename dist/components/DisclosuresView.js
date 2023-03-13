import { LabelField } from "./LabelField";
import styles from "../styles/DisclosuresView.module.css";
// import iconLocked from "../assets/lockIcon.svg";
// import Image from 'next/image';
import React from "react";
var DisclosuresView = function (_a) {
    var disclosuresURL = _a.disclosuresURL, message = _a.message;
    return (React.createElement("div", { className: styles.footer },
        React.createElement("div", { className: styles.disclosuresContainer },
            React.createElement("div", { className: styles.informationContainer },
                React.createElement("img", { style: { marginRight: "1vw" }, src: "/lockIcon.svg", alt: "" }),
                React.createElement(LabelField, { label: message, className: styles.smallTitle })))));
};
export { DisclosuresView };
//# sourceMappingURL=DisclosuresView.js.map