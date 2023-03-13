import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { PhoneBlockData } from "../interfaces/types";
type PhoneState = {
    number: string;
};
declare class PhoneComponent extends React.Component<ComponentProps, PhoneState> {
    config: PhoneBlockData;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    handlePickerChange: (id: string, countryCode: string) => void;
    handleInputChange: (id: string, phoneNumber: string) => void;
    updatePhoneNumber: (phoneNumber: string) => void;
    render(): JSX.Element;
}
export { PhoneComponent };
