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
import CheckboxInput from "./CheckboxInput";
var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (id, checked) {
            _this.props.onChange(id, checked, true);
        };
        _this.renderCheckbox = function (index, item) {
            return React.createElement(CheckboxInput, __assign({ key: item.id, onClick: _this.onClick }, item));
        };
        return _this;
    }
    CheckboxComponent.prototype.render = function () {
        var _this = this;
        var data = this.props.data;
        return (React.createElement("div", { style: { display: "flex", width: "100%", flexDirection: "column" } }, data.items.map(function (item, index) {
            return _this.renderCheckbox(index, item);
        })));
    };
    return CheckboxComponent;
}(React.Component));
export { CheckboxComponent };
//# sourceMappingURL=CheckboxComponent.js.map