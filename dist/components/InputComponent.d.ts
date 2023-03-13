import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { InputBlockData } from "../interfaces/types";
interface InputState {
    value: string;
    isValid: boolean;
}
declare class InputComponent extends React.Component<ComponentProps, InputState> {
    validation: (value: string) => boolean;
    config: InputBlockData;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    validate(value: string): void;
    render(): JSX.Element;
}
export { InputComponent };
