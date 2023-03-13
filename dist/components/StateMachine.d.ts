import React from "react";
import { StateMachineData, StateMachineProps } from "../interfaces/types";
export declare class StateMachine extends React.Component<StateMachineProps, StateMachineData> {
    constructor(props: StateMachineProps);
    prevStep: () => void;
    onError: () => void;
    nextStep: (data: {
        [key: string]: any;
    }) => void;
    componentDidUpdate(): void;
    handleChange: (key: string, value: string) => void;
    drawComponent(): JSX.Element;
    render(): JSX.Element;
}
