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
import SpinnerComponent from "./components/SpinnerComponent";
import { StateMachine } from "./components/StateMachine";
import { API } from "./network/API";
var OskySDK = /** @class */ (function (_super) {
    __extends(OskySDK, _super);
    function OskySDK(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            session: null,
            isLoading: true,
        };
        return _this;
    }
    OskySDK.prototype.componentDidMount = function () {
        var _this = this;
        API.getSession("1")
            .then(function (data) {
            _this.setState({
                session: data,
                isLoading: false,
            });
        })
            .catch(function (error) {
            console.log('Error fetching session data: ', error);
        });
    };
    OskySDK.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, session = _a.session;
        return (React.createElement(React.Fragment, null, isLoading ? (React.createElement(SpinnerComponent, null)) : (session !== null && React.createElement(StateMachine, { session: session }))));
    };
    return OskySDK;
}(React.Component));
export { OskySDK };
//# sourceMappingURL=OskySDK.js.map