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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
var FileUploadMultiple = /** @class */ (function (_super) {
    __extends(FileUploadMultiple, _super);
    function FileUploadMultiple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            files: null,
        };
        _this.handleFileChange = function (e) {
            // setFileList(e.target.files);
            if (e.target.files !== null) {
                _this.setState({ files: e.target.files });
            }
        };
        return _this;
    }
    //   const handleUploadClick = () => {
    //     if (!fileList) {
    //       return;
    //     }
    //     // 👇 Create new FormData object and append files
    //     const data = new FormData();
    //     files.forEach((file, i) => {
    //       data.append(`file-${i}`, file, file.name);
    //     });
    //     // 👇 Uploading the files using the fetch API to the server
    //     fetch('https://httpbin.org/post', {
    //       method: 'POST',
    //       body: data,
    //     })
    //       .then((res) => res.json())
    //       .then((data) => console.log(data))
    //       .catch((err) => console.error(err));
    //   };
    // 👇 files is not an array, but it's iterable, spread to get an array of files
    FileUploadMultiple.prototype.render = function () {
        var filesArray = this.state.files ? __spreadArray([], this.state.files, true) : [];
        return (React.createElement("div", null,
            React.createElement("input", { type: "file", onChange: this.handleFileChange, multiple: true })));
    };
    return FileUploadMultiple;
}(React.Component));
export default FileUploadMultiple;
//# sourceMappingURL=FileUploadMultiple.js.map