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
import { LabelField } from "./LabelField";
import styles from "../styles/ToggleOption.module.css";
var ToggleOption = /** @class */ (function (_super) {
    __extends(ToggleOption, _super);
    function ToggleOption(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selected: undefined,
        };
        _this.onSelect = function (id, title) {
            _this.props.onChange(_this.props.id, title, true);
            _this.setState({ selected: id });
        };
        _this.renderChoice = function (id, title) {
            var isSelected = id === _this.state.selected;
            return (React.createElement("button", { key: id, className: "".concat(styles.option, " ").concat(isSelected ? styles.selected : null), onClick: function () {
                    _this.onSelect(id, title);
                } }, title));
        };
        _this.config = props.data;
        _this.state = {
            selected: undefined
        };
        return _this;
    }
    ToggleOption.prototype.componentDidMount = function () {
        this.props.onChange(this.props.id, null, false);
    };
    ToggleOption.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(LabelField, { label: this.config.title, key: this.props.id }),
            React.createElement("div", { className: styles["option-choice-container"] }, this.config.items.map(function (item, index) {
                return _this.renderChoice(item.id, item.title);
            }))));
    };
    return ToggleOption;
}(React.Component));
export { ToggleOption };
//# sourceMappingURL=ToggleOption.js.map