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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import styles from "../styles/PhoneComponent.module.css";
import { InputComponent } from "./InputComponent";
import { PickerComponent } from "./PickerComponent";
var PhoneComponent = /** @class */ (function (_super) {
    __extends(PhoneComponent, _super);
    function PhoneComponent(props) {
        var _this = this;
        var _a;
        _this = _super.call(this, props) || this;
        _this.handlePickerChange = function (id, countryCode) {
            _this.updatePhoneNumber(countryCode + _this.state.number.toString().slice(2));
        };
        _this.handleInputChange = function (id, phoneNumber) {
            _this.updatePhoneNumber(_this.state.number.toString().slice(0, 2) + phoneNumber.toString());
        };
        _this.updatePhoneNumber = function (phoneNumber) {
            _this.setState({
                number: phoneNumber,
            }, function () {
                _this.props.onChange(_this.props.id, _this.state.number, true);
            });
        };
        _this.config = _this.props.data;
        _this.state = {
            number: (_a = _this.props.value) !== null && _a !== void 0 ? _a : _this.config.number,
        };
        return _this;
    }
    PhoneComponent.prototype.componentDidMount = function () {
        this.props.onChange(this.props.id, this.props.value, true);
    };
    PhoneComponent.prototype.render = function () {
        var pickerProps = {
            id: "prefix",
            data: {
                title: "+1",
                items: [
                    {
                        id: "+1",
                        text: "+1",
                    },
                    {
                        id: "+2",
                        text: "+2",
                    },
                    {
                        id: "+31",
                        text: "+31",
                    },
                    {
                        id: "+40",
                        text: "+40",
                    },
                ],
            },
        };
        var inputProps = {
            id: "swaS-bnMP9",
            data: {
                text: "Phone",
                validation: "phone",
            },
        };
        var countryCode = this.state.number.toString().slice(0, 2);
        var number = this.state.number.toString().slice(2);
        return (React.createElement("div", { className: styles["phone-container"] },
            React.createElement(PickerComponent, __assign({ onChange: this.handlePickerChange, value: countryCode }, pickerProps)),
            React.createElement(InputComponent, __assign({ onChange: this.handleInputChange, value: number }, inputProps))));
    };
    return PhoneComponent;
}(React.Component));
export { PhoneComponent };
//# sourceMappingURL=PhoneComponent.js.map