import React from "react";
import { CheckboxBlockData } from "../interfaces/types";
interface ToggleCheckboxState {
    checked: boolean;
}
interface CheckboxInputProps {
    onClick: (id: string, checked: boolean) => void;
}
declare class CheckboxInput extends React.Component<CheckboxBlockData & CheckboxInputProps, ToggleCheckboxState> {
    state: {
        checked: boolean;
    };
    componentDidMount(): void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default CheckboxInput;
