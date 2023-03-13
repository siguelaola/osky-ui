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
import styles from "../styles/PickerComponent.module.css";
var PickerComponent = /** @class */ (function (_super) {
    __extends(PickerComponent, _super);
    function PickerComponent(props) {
        var _this = this;
        var _a;
        _this = _super.call(this, props) || this;
        _this.toggleOpen = function () {
            _this.setState(function (prevState) { return ({
                open: !prevState.open,
            }); });
        };
        _this.onClick = function (value) {
            _this.props.onChange(_this.props.id, value, true);
            _this.setState({
                open: false,
                value: value,
            });
        };
        _this.config = _this.props.data;
        _this.state = {
            open: false,
            value: (_a = _this.props.value) !== null && _a !== void 0 ? _a : _this.config.title,
        };
        return _this;
    }
    PickerComponent.prototype.componentDidMount = function () {
        this.props.onChange(this.props.id, this.props.value, false);
    };
    PickerComponent.prototype.render = function () {
        var _this = this;
        var _a;
        return (React.createElement("div", { className: styles["picker-container"] },
            React.createElement("div", { className: styles["picker-selected"], onClick: this.toggleOpen }, this.state.value),
            this.state.open && (React.createElement("div", { className: styles["picker-items"] }, (_a = this.config) === null || _a === void 0 ? void 0 : _a.items.map(function (option) { return (React.createElement("div", { key: option.id, className: styles["picker-option"], onClick: function () { return _this.onClick(option.text); } }, option.text)); })))));
    };
    return PickerComponent;
}(React.Component));
export { PickerComponent };
//# sourceMappingURL=PickerComponent.js.map