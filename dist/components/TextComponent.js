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
import styles from "../styles/LabelField.module.css";
var TextComponent = /** @class */ (function (_super) {
    __extends(TextComponent, _super);
    function TextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextComponent.prototype.render = function () {
        var _a;
        var data = this.props.data;
        var config = {
            text: data.text,
            level: data.level,
            alignment: (_a = data.alignment) !== null && _a !== void 0 ? _a : "left",
        };
        var Tag = config.level !== undefined
            //   ? (`title${style.level}` as keyof JSX.IntrinsicElements)
            ? ("title".concat(config.level))
            : "label";
        return (React.createElement("div", { className: "".concat(styles[Tag], " ").concat(styles.text), style: { textAlign: config.alignment } },
            React.createElement("span", null, config.text)));
    };
    return TextComponent;
}(React.Component));
export { TextComponent };
//# sourceMappingURL=TextComponent.js.map