import React from "react";
import {
  BlockData,
  NodeScreen,
  BlockType,
  BlockDataType,
} from "../interfaces/types";
import { CheckboxComponent } from "./CheckboxComponent";
import { ImageComponent } from "./ImageComponent";
import { InputComponent } from "./InputComponent";
import { InputSelectComponent } from "./InputSelectComponent";
import { SingleChoiceOption } from "./SingleChoiceOption";
import { TextComponent } from "./TextComponent";
import { ToggleOption } from "./ToggleOption";
import { VideoComponent } from "./VideoComponent";
import { ButtonComponent } from "./ButtonComponent";
import { LineComponent } from "./LineComponent";
import { DateComponent } from "./DateComponent";
import { PhoneComponent } from "./PhoneComponent";
import { AddressComponent } from "./AddressComponent";

import styles from "../styles/ScreenComponent.module.css";
import { CountryComponent } from "./CountryComponent";

export interface ScreenComponentProps {
  node: NodeScreen;
  values?: {};
  handleChange: (key: string, value: string) => void;
  nextStep: (data: { [key: string]: any }) => void;
}

export type ComponentProps = {
  id: string;
  data: BlockDataType;
  value?: string;
  onChange: (id: string, value: any, valid: boolean) => void;
};

type ComponentValue = {
  value: any;
  enabled: boolean;
};

type ComponentsData = {
    // blockData?: { string?: ComponentValue };
//   [key: string]: {value: any, enabled: boolean};
};

interface ScreenComponentState {
    blockData: { string?: {value: any, isValid: boolean}};
    // blockData: ComponentsData;
    canContinue: boolean;
}

class ScreenComponent extends React.Component<
  ScreenComponentProps,
  ScreenComponentState
> {
  constructor(props: ScreenComponentProps) {
    super(props);

    const blockData: ScreenComponentState = {
      blockData: {},
      canContinue: false,
    };

    if (this.props.values) {
      Object.entries(this.props.values).forEach(([name, value]) => {
        blockData.blockData[name] = { value, enabled: true };
      });
      blockData.canContinue = true;
    }

    this.state = blockData;
  }

  components: {
    [key in BlockType]:
      | React.FC<ComponentProps>
      | React.ComponentType<ComponentProps>;
  } = {
    date: DateComponent,
    image: ImageComponent,
    video: VideoComponent,
    "input-text": InputComponent,
    header: TextComponent,
    "input-select": InputSelectComponent,
    paragraph: TextComponent,
    separator: LineComponent,
    yesno: ToggleOption,
    checklist: CheckboxComponent,
    phone: PhoneComponent,
    country: CountryComponent,
    // list: LabelField,
    address: AddressComponent,
  };

  nextStep = () => {
    if (this.state.canContinue) {
      this.setState({});

      const data = Object.entries(this.state.blockData).reduce(
        (acc, [id, { value }]) => ({ ...acc, [id]: value }),
        {}
      );
      this.props.nextStep(data);
    }
  };

  renderBlock = (block: BlockData) => {
    const BlockComponent = this.components[block.type];
    if (BlockComponent) {
      const blockData = block.data;
      return (
        <BlockComponent
          key={block.id}
          id={block.id}
          data={blockData}
          value={
            this.state.blockData[block.id]
              ? this.state.blockData[block.id]["value"]
              : null
          }
          onChange={(id: string, value: any, isValid: boolean) => {
            this.handleBlockDataChange(id, value, isValid);
          }}
        />
      );
    }
    return null;
  };

  handleBlockDataChange = (blockId: string, value: any, isValid: boolean) => {
    this.setState(
      (prevState) => ({
        blockData: {
          ...prevState.blockData,
          [blockId]: { value, isValid },
        },
      }),
      () => {
        let canContinue = true;
        Object.entries(this.state.blockData).forEach(([, value]) => {
          canContinue = canContinue && value.isValid;
        });
        this.setState({ canContinue: canContinue });
      }
    );
  };

  render() {
    const { node } = this.props;
    const { blocks } = node.data;

    return (
      <div className={styles["step-container"]}>
        {blocks && blocks.map((block) => this.renderBlock(block))}

        <ButtonComponent
          enabled={this.state.canContinue}
          onClick={this.nextStep}
        />
      </div>
    );
  }
}

export { ScreenComponent };
