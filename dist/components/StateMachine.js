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
import { API } from "../network/API";
import { ScreenComponent } from "./ScreenComponent";
import { DisclosuresView } from "./DisclosuresView";
import styles from "../styles/StateMachine.module.css";
var StateMachine = /** @class */ (function (_super) {
    __extends(StateMachine, _super);
    function StateMachine(props) {
        var _this = _super.call(this, props) || this;
        _this.prevStep = function () {
            var _a;
            var prev_node = (_a = _this.props.session.edges.find(function (edge) { return edge.target === _this.state.currentNode.id; })) === null || _a === void 0 ? void 0 : _a.source;
            var node = _this.props.session.nodes.find(function (node) { return node.id === prev_node; });
            if (node) {
                _this.setState({
                    currentNode: node,
                });
            }
        };
        _this.onError = function () {
            //TODO: BLOCK ON DASHBOARD - Handle Error Screen
        };
        _this.nextStep = function (data) {
            var _a;
            var canContinue = true;
            //TODO: BLOCK ON DASHBOARD - Check conditions to move to next screen
            _this.setState(function (prevState) {
                var _a;
                return ({
                    information: __assign(__assign({}, prevState.information), (_a = {}, _a[_this.state.currentNode.id] = data, _a)),
                });
            });
            if (canContinue) {
                API.updateSession(data);
                var next_node_1 = (_a = _this.props.session.edges.find(function (edge) { return edge.source === _this.state.currentNode.id; })) === null || _a === void 0 ? void 0 : _a.target;
                if (next_node_1) {
                    var node = _this.props.session.nodes.find(function (node) { return node.id === next_node_1; });
                    if (node) {
                        _this.setState({
                            currentNode: node,
                        });
                    }
                    else {
                        //HANDLE ERROR - NODE DOES NOT EXIST
                        return;
                    }
                }
                else {
                    API.finish();
                }
            }
            else {
                //TODO: BLOCK ON DASHBOARD - HANDLE ERROR NODE BASED ON CRITERIA
                _this.onError();
            }
        };
        _this.handleChange = function (key, value) {
            _this.setState(function (prevState) {
                var _a;
                return __assign(__assign({}, prevState), (_a = {}, _a[key] = value, _a));
            });
        };
        _this.state = {
            step: 0,
            currentNode: _this.props.session.nodes.find(function (node) { return node.id === "node-0"; }) ||
                _this.props.session.nodes[_this.state.step],
            information: {},
        };
        return _this;
    }
    StateMachine.prototype.componentDidUpdate = function () {
        window.scrollTo(0, 0);
    };
    StateMachine.prototype.drawComponent = function () {
        var _a;
        var props = {
            node: this.state.currentNode,
            values: (_a = this.state.information[this.state.currentNode.id]) !== null && _a !== void 0 ? _a : {},
            nextStep: this.nextStep,
            handleChange: this.handleChange,
        };
        return React.createElement(ScreenComponent, __assign({ key: this.state.currentNode.id }, props));
    };
    StateMachine.prototype.render = function () {
        var backEnabled = this.state.currentNode.id !== "node-0" ? styles.backEnabled : null;
        return (React.createElement("div", { className: styles.App },
            React.createElement("div", { className: styles["screen-container"] },
                React.createElement("div", { className: styles.header },
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "".concat(styles["back-btn"], " ").concat(backEnabled), onClick: this.prevStep },
                            React.createElement("img", { src: "/chevron-right.svg", alt: "" }))),
                    React.createElement("div", { style: { flex: "1" } },
                        React.createElement("img", { className: styles.logo, src: "/moneygram.svg", alt: "" }))),
                React.createElement("div", { className: styles["components-container"] }, this.drawComponent()),
                React.createElement(DisclosuresView, { disclosuresURL: "https://www.olainvierte.com", message: "Your information is secure and will not be shared" }))));
    };
    return StateMachine;
}(React.Component));
export { StateMachine };
//# sourceMappingURL=StateMachine.js.map