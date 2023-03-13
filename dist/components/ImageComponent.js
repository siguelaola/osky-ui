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
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageComponent.prototype.render = function () {
        var _a = this.props.data, url = _a.url, withBorder = _a.withBorder, withBackground = _a.withBackground, stretched = _a.stretched, caption = _a.caption;
        return (React.createElement("img", { key: url, 
            // className={styles.center}
            style: { padding: "4vh" }, src: url, alt: "" }));
    };
    return ImageComponent;
}(React.Component));
export { ImageComponent };
//# sourceMappingURL=ImageComponent.js.map