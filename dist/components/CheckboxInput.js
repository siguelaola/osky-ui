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
import styles from "../styles/CheckboxInput.module.css";
import { LineComponent } from "./LineComponent";
var CheckboxInput = /** @class */ (function (_super) {
    __extends(CheckboxInput, _super);
    function CheckboxInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: _this.props.checked,
        };
        _this.handleChange = function (event) {
            _this.props.onClick(_this.props.id, !_this.state.checked);
            _this.setState(function (prevState) { return ({
                checked: !prevState.checked,
            }); });
        };
        return _this;
    }
    CheckboxInput.prototype.componentDidMount = function () {
        this.props.onClick(this.props.id, this.state.checked);
    };
    CheckboxInput.prototype.render = function () {
        var data = {};
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "flex", width: "100%", flexDirection: "row" } },
                React.createElement("div", { className: styles["checkbox-title"] }, this.props.text),
                React.createElement("div", { className: styles.checkbox, style: { display: "inline-block" } },
                    React.createElement("input", { type: "checkbox", className: this.state.checked ? styles["checked-checkbox"] : undefined, checked: this.state.checked, onChange: this.handleChange }),
                    React.createElement("label", null))),
            React.createElement(LineComponent, { id: this.props.id + "Line", data: data, onChange: function (event) { } })));
    };
    return CheckboxInput;
}(React.Component));
export default CheckboxInput;
//# sourceMappingURL=CheckboxInput.js.map