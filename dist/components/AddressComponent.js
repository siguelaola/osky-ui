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
import { TextComponent } from "./TextComponent";
import { InputComponent } from "./InputComponent";
import { PickerComponent } from "./PickerComponent";
import styles from "../styles/AddressComponent.module.css";
var AddressComponent = /** @class */ (function (_super) {
    __extends(AddressComponent, _super);
    function AddressComponent(props) {
        var _this = this;
        var _a;
        _this = _super.call(this, props) || this;
        _this.handleInputChange = function (id, value, isValid) {
            _this.setState(function (prevState) {
                var _a;
                return (__assign(__assign({}, prevState), (_a = {}, _a[id] = value, _a)));
            }, function () {
                _this.props.onChange(_this.props.id, _this.state, true);
            });
        };
        _this.config = props.data;
        _this.state = (_a = _this.props.value) !== null && _a !== void 0 ? _a : {
            address: null,
            address1: null,
            postalCode: null,
            city: null,
            country: null,
        };
        return _this;
    }
    AddressComponent.prototype.render = function () {
        var _this = this;
        var addressText = {
            id: "address",
            type: "paragraph",
            data: {
                text: "Address",
            },
        };
        var postalText = {
            id: "postalCode",
            type: "paragraph",
            data: {
                text: "Postal Code",
            },
        };
        var cityText = {
            id: "city",
            type: "paragraph",
            data: {
                text: "City",
            },
        };
        var countryText = {
            id: "country",
            type: "paragraph",
            data: {
                text: "Country",
            },
        };
        var addressInput = {
            id: "address",
            type: "input-text",
            data: {
                text: "",
            },
        };
        var zipInput = {
            id: "postalCode",
            type: "input-text",
            data: {
                text: "",
            },
        };
        var cityInput = {
            id: "city",
            type: "input-text",
            data: {
                text: "",
            },
        };
        var pickerProps = {
            id: "country",
            data: {
                title: "Select your country",
                items: [
                    {
                        id: "spain",
                        text: "Spain",
                    },
                    {
                        id: "usa",
                        text: "USA",
                    },
                    {
                        id: "venezuela",
                        text: "Venezuela",
                    },
                    {
                        id: "belgium",
                        text: "Belgium",
                    },
                ],
            },
        };
        return (React.createElement("div", { className: styles.address },
            React.createElement("div", { className: styles["address-container"] },
                React.createElement(TextComponent, __assign({}, addressText, { onChange: function () { } })),
                React.createElement(InputComponent, __assign({ value: this.state.address, onChange: this.handleInputChange }, addressInput)),
                React.createElement(InputComponent, __assign({ value: this.state.address1, onChange: function (_, value) {
                        return _this.handleInputChange("address1", value, true);
                    } }, addressInput))),
            React.createElement("div", { className: "".concat(styles["address-container"], " ").concat(styles.horizontal) },
                React.createElement("div", { className: "".concat(styles.column, " ").concat(styles.column25) },
                    React.createElement(TextComponent, __assign({}, postalText, { onChange: function () { } })),
                    React.createElement(InputComponent, __assign({ value: this.state.postalCode, onChange: this.handleInputChange }, zipInput))),
                React.createElement("div", { className: "".concat(styles.column, " ").concat(styles.column75) },
                    React.createElement(TextComponent, __assign({}, cityText, { onChange: function () { } })),
                    React.createElement(InputComponent, __assign({ value: this.state.city, onChange: this.handleInputChange }, cityInput)))),
            React.createElement("div", null,
                React.createElement(TextComponent, __assign({}, countryText, { onChange: function () { } })),
                React.createElement(PickerComponent, __assign({ value: this.state.country, onChange: this.handleInputChange }, pickerProps)))));
    };
    return AddressComponent;
}(React.Component));
export { AddressComponent };
//# sourceMappingURL=AddressComponent.js.map