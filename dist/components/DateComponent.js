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
import styles from "../styles/DateComponent.module.css";
var DateComponent = /** @class */ (function (_super) {
    __extends(DateComponent, _super);
    function DateComponent(props) {
        var _this = this;
        var _a;
        _this = _super.call(this, props) || this;
        _this.dateChange = function (event) {
            _this.setState({ date: event.target.value });
            _this.props.onChange(_this.props.id, event.target.value, true);
        };
        _this.config = props.data;
        _this.state = {
            date: (_a = _this.props.value) !== null && _a !== void 0 ? _a : _this.config.startDate,
        };
        return _this;
    }
    DateComponent.prototype.componentDidMount = function () {
        var _a;
        this.props.onChange(this.props.id, this.state.date, (_a = this.config.required) !== null && _a !== void 0 ? _a : false);
    };
    DateComponent.prototype.render = function () {
        return (React.createElement("div", { className: styles["date-container"] },
            React.createElement("input", { type: "date", value: this.state.date, min: this.config.startDate, max: this.config.endDate, onChange: this.dateChange })));
    };
    return DateComponent;
}(React.Component));
export { DateComponent };
//# sourceMappingURL=DateComponent.js.map