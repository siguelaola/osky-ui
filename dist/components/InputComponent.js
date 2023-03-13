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
import styles from "../styles/InputComponent.module.css";
// import lockIcon from "../assets/lockIcon.svg";
import { LabelField } from "./LabelField";
var ValidationType;
(function (ValidationType) {
    ValidationType["email"] = "email";
    ValidationType["ssn"] = "ssn";
    ValidationType["dateBirth"] = "mm/dd/yyy";
    ValidationType["phone"] = "phone";
    ValidationType["custom"] = "custom";
})(ValidationType || (ValidationType = {}));
function getRegex(type, custom) {
    switch (type) {
        case ValidationType.email:
            return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        case ValidationType.ssn:
            return /^\d{3}-\d{2}-\d{4}$/;
        case ValidationType.dateBirth:
            return /^\d{2}-\d{2}-\d{4}$/;
        case ValidationType.phone:
            return /^\d+$/;
        case ValidationType.custom:
            if (custom !== undefined) {
                return RegExp(custom);
            }
    }
    return null;
}
var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.config = props.data;
        var currentValue = _this.props.value;
        _this.state = {
            value: currentValue !== null && currentValue !== void 0 ? currentValue : "",
            isValid: currentValue !== "",
        };
        _this.validation = function (value) {
            var regex = getRegex(_this.config.validation, _this.config.regex);
            if (regex !== null) {
                return regex.test(value);
            }
            else {
                return true;
            }
        };
        return _this;
    }
    InputComponent.prototype.componentDidMount = function () {
        var isValid = this.validation(this.state.value);
        this.props.onChange(this.props.id, this.state.value, isValid);
    };
    InputComponent.prototype.validate = function (value) {
        var _this = this;
        var isValid = this.validation(value);
        this.setState({
            value: value,
            isValid: isValid,
        }, function () {
            _this.props.onChange(_this.props.id, value, _this.state.isValid);
        });
    };
    InputComponent.prototype.render = function () {
        var _this = this;
        var _a = this.state, value = _a.value, isValid = _a.isValid;
        var showError = !isValid && this.state.value.length > 0;
        return (React.createElement("div", { className: styles["validation-container"] },
            React.createElement(LabelField, { className: "".concat(styles["input-title"], " ").concat(showError ? styles["input-invalid"] : ""), label: this.config.label }),
            React.createElement("div", { className: styles["input-container"] },
                React.createElement("input", { className: "".concat(styles["input-field"], " ").concat(showError ? styles["input-invalid-border"] : ""), type: "text", value: value, onChange: function (event) {
                        _this.validate(event.target.value);
                    } }),
                this.config.isSecure && (
                // <Image className={styles["input-lock"]} src="/lockIcon.svg" alt="Secure"/>
                React.createElement("img", { className: styles["input-lock"], src: "/lockIcon.svg", alt: "Lock" }))),
            showError && (React.createElement("div", { className: styles["input-error"] }, this.config.errorMessage))));
    };
    return InputComponent;
}(React.Component));
export { InputComponent };
//# sourceMappingURL=InputComponent.js.map