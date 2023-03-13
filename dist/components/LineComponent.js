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
var LineComponent = /** @class */ (function (_super) {
    __extends(LineComponent, _super);
    function LineComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineComponent.prototype.render = function () {
        var style = {
            color: "#F2F2F7",
            height: 1
        };
        return React.createElement("hr", { style: { borderColor: style.color, borderWidth: style.height, borderStyle: "solid", width: "100%" } });
    };
    return LineComponent;
}(React.Component));
export { LineComponent };
//# sourceMappingURL=LineComponent.js.map