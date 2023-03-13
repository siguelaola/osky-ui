var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import styles from "../styles/ButtonComponent.module.css";
import { ButtonLabel } from "./ButtonLabel";
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Continue = function (e) {
            e.preventDefault();
            _this.props.onClick();
        };
        return _this;
    }
    ButtonComponent.prototype.render = function () {
        var title = "Continue";
        return (React.createElement("button", { className: "".concat(styles["standard-button"], " ").concat(this.props.enabled === false ? styles.disabled : ""), onClick: this.props.onClick },
            React.createElement(ButtonLabel, { className: styles["button-label"], text: title, onClick: this.props.onClick })));
    };
    return ButtonComponent;
}(React.Component));
export { ButtonComponent };
//# sourceMappingURL=ButtonComponent.js.map