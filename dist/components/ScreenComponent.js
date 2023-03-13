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
import { CheckboxComponent } from "./CheckboxComponent";
import { ImageComponent } from "./ImageComponent";
import { InputComponent } from "./InputComponent";
import { PickerComponent } from "./PickerComponent";
import { TextComponent } from "./TextComponent";
import { ToggleOption } from "./ToggleOption";
import { VideoComponent } from "./VideoComponent";
import styles from "../styles/ScreenComponent.module.css";
import { ButtonComponent } from "./ButtonComponent";
import { LineComponent } from "./LineComponent";
import { DateComponent } from "./DateComponent";
import { PhoneComponent } from "./PhoneComponent";
import { AddressComponent } from "./AddressComponent";
var ScreenComponent = /** @class */ (function (_super) {
    __extends(ScreenComponent, _super);
    function ScreenComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.components = {
            date: DateComponent,
            image: ImageComponent,
            video: VideoComponent,
            "input-text": InputComponent,
            header: TextComponent,
            picker: PickerComponent,
            paragraph: TextComponent,
            separator: LineComponent,
            yesno: ToggleOption,
            checklist: CheckboxComponent,
            phone: PhoneComponent,
            // list: LabelField,
            // clickableOption: LabelField,
            address: AddressComponent,
        };
        _this.nextStep = function () {
            if (_this.state.canContinue) {
                _this.setState({});
                var data = Object.entries(_this.state.blockData).reduce(function (acc, _a) {
                    var _b;
                    var id = _a[0], value = _a[1].value;
                    return (__assign(__assign({}, acc), (_b = {}, _b[id] = value, _b)));
                }, {});
                _this.props.nextStep(data);
            }
        };
        _this.renderBlock = function (block) {
            var BlockComponent = _this.components[block.type];
            if (BlockComponent) {
                var blockData = block.data;
                return (React.createElement(BlockComponent, { key: block.id, id: block.id, data: blockData, value: _this.state.blockData[block.id]
                        ? _this.state.blockData[block.id]["value"]
                        : null, onChange: function (id, value, isValid) {
                        _this.handleBlockDataChange(id, value, isValid);
                    } }));
            }
            return null;
        };
        _this.handleBlockDataChange = function (blockId, value, isValid) {
            // this.setState(
            //   (prevState) => ({
            //     blockData: {
            //       ...prevState.blockData,
            //       [blockId]: { value, isValid },
            //     },
            //   }),
            //   () => {
            //     let canContinue = true;
            //     Object.entries(this.state.blockData).forEach(([, value]) => {
            //       canContinue = canContinue && value.isValid;
            //     });
            //     this.setState({ canContinue: canContinue });
            //   }
            // );
        };
        var blockData = { blockData: {}, canContinue: false };
        if (_this.props.values) {
            Object.entries(_this.props.values).forEach(function (_a) {
                var name = _a[0], value = _a[1];
                blockData.blockData[name] = { value: value, enabled: true };
            });
            blockData.canContinue = true;
        }
        _this.state = blockData;
        return _this;
    }
    ScreenComponent.prototype.render = function () {
        var _this = this;
        var node = this.props.node;
        var blocks = node.data.blocks;
        return (React.createElement("div", { className: styles["step-container"] },
            blocks && blocks.map(function (block) { return _this.renderBlock(block); }),
            React.createElement(ButtonComponent, { enabled: this.state.canContinue, onClick: this.nextStep })));
    };
    return ScreenComponent;
}(React.Component));
export { ScreenComponent };
//# sourceMappingURL=ScreenComponent.js.map