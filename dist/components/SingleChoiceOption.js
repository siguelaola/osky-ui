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
import { Component } from "react";
// import icon from '../../assets/forward-arrow.svg';
import styles from "../styles/SingleChoiceOption.module.css";
var SingleChoiceOption = /** @class */ (function (_super) {
    __extends(SingleChoiceOption, _super);
    function SingleChoiceOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleChoiceOption.prototype.render = function () {
        return (React.createElement("div", { className: styles.container, onClick: this.props.onClick },
            React.createElement("span", { className: styles.title }, this.props.title)));
    };
    return SingleChoiceOption;
}(Component));
export { SingleChoiceOption };
//# sourceMappingURL=SingleChoiceOption.js.map