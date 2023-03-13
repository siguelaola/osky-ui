import React from "react";
import { BlockData, NodeScreen, BlockType, BlockDataType } from "../interfaces/types";
export interface ScreenComponentProps {
    node: NodeScreen;
    values?: {};
    handleChange: (key: string, value: string) => void;
    nextStep: (data: {
        [key: string]: any;
    }) => void;
}
export type ComponentProps = {
    id: string;
    data: BlockDataType;
    value?: string;
    onChange: (id: string, value: any, valid: boolean) => void;
};
type BlockValue = {
    value: any;
    enabled: boolean;
};
type BlockData2 = {
    [key: string]: BlockValue;
};
interface KYCStepState {
    blockData: BlockData2;
    canContinue: boolean;
}
declare class ScreenComponent extends React.Component<ScreenComponentProps, KYCStepState> {
    constructor(props: ScreenComponentProps);
    components: {
        [key in BlockType]: React.FC<ComponentProps> | React.ComponentType<ComponentProps>;
    };
    nextStep: () => void;
    renderBlock: (block: BlockData) => JSX.Element;
    handleBlockDataChange: (blockId: string, value: any, isValid: boolean) => void;
    render(): JSX.Element;
}
export { ScreenComponent };
