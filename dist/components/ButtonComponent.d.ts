import React from "react";
import { MouseEvent } from "react";
interface ButtonProps {
    enabled: boolean;
    onClick: () => void;
}
declare class ButtonComponent extends React.Component<ButtonProps> {
    Continue: (e: MouseEvent<HTMLButtonElement>) => void;
    render(): JSX.Element;
}
export { ButtonComponent };
