import { Component } from "react";
declare class SingleChoiceOption extends Component<{
    title: string;
    onClick: () => void;
}> {
    render(): JSX.Element;
}
export { SingleChoiceOption };
