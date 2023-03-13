import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { DateBlockData } from "../interfaces/types";
interface DateComponentState {
    date: string | undefined;
}
declare class DateComponent extends React.Component<ComponentProps, DateComponentState> {
    config: DateBlockData;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    dateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export { DateComponent };
