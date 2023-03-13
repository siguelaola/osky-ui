import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { ToggleOptionBlockData } from "../interfaces/types";
export declare class ToggleOption extends React.Component<ComponentProps, {
    selected: string | undefined;
}> {
    state: {
        selected: any;
    };
    config: ToggleOptionBlockData;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    onSelect: (id: string, title: string) => void;
    renderChoice: (id: string, title: string) => JSX.Element;
    render(): JSX.Element;
}
