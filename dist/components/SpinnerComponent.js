import styles from "../styles/SpinnerComponent.module.css";
import React from "react";
function SpinnerComponent() {
    return (React.createElement("div", { className: styles.spinnerContainer },
        React.createElement("div", { className: styles.spinner }),
        React.createElement("div", { className: styles.message }, "Fetching your session...")));
}
export default SpinnerComponent;
//# sourceMappingURL=SpinnerComponent.js.map