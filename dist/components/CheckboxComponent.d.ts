import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { CheckboxBlockData } from "../interfaces/types";
declare class CheckboxComponent extends React.Component<ComponentProps> {
    onClick: (id: string, checked: boolean) => void;
    renderCheckbox: (index: number, item: CheckboxBlockData) => JSX.Element;
    render(): JSX.Element;
}
export { CheckboxComponent };
