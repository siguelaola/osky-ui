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
import styles from "../styles/VideoComponent.module.css";
var VideoComponent = /** @class */ (function (_super) {
    __extends(VideoComponent, _super);
    function VideoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoComponent.prototype.render = function () {
        var _a = this.props.data, url = _a.url, withBorder = _a.withBorder, withBackground = _a.withBackground, stretched = _a.stretched, caption = _a.caption;
        return (React.createElement("div", { className: styles["video-container"] },
            React.createElement("video", { src: url, className: "".concat(styles["video-block"], " ").concat(withBorder ? styles["with-border"] : null, " ").concat(withBackground ? styles["with-background"] : null, " ").concat(stretched ? styles.stretched : null), controls: true }),
            caption && React.createElement("div", { className: styles["video-caption"] }, caption)));
    };
    return VideoComponent;
}(React.Component));
export { VideoComponent };
//# sourceMappingURL=VideoComponent.js.map