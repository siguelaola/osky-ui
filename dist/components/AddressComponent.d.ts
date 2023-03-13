import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { AddressBlockData } from "../interfaces/types";
interface AddressState {
    address: string;
    address1: string;
    city: string;
    postalCode: string;
    country: string;
}
declare class AddressComponent extends React.Component<ComponentProps, AddressState> {
    config: AddressBlockData;
    constructor(props: ComponentProps);
    handleInputChange: (id: string, value: any, isValid: boolean) => void;
    render(): JSX.Element;
}
export { AddressComponent };
