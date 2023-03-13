import React from "react";
import { PickerBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
interface PickerState {
    open: boolean;
    value: string;
}
declare class PickerComponent extends React.Component<ComponentProps, PickerState> {
    config: PickerBlockData;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    toggleOpen: () => void;
    onClick: (value: string) => void;
    render(): JSX.Element;
}
export { PickerComponent };
