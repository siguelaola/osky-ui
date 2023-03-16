import React from "react";
import styles from "../styles/InputSelectComponent.module.css";
import { InputSelectBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import { LabelField } from "./LabelField";

interface InputSelectState {
  open: boolean;
  value: string;
}

class InputSelectComponent extends React.Component<
  ComponentProps,
  InputSelectState
> {
  config: InputSelectBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = this.props.data as InputSelectBlockData;

    this.state = {
      open: false,
      value: this.props.value ?? this.config.defaultValue,
    };
  }

  componentDidMount() {
    this.props.onChange(this.props.id, this.props.value, false);
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  onClick = (value: string) => {
    this.props.onChange(this.props.id, value, true);

    this.setState({
      open: false,
      value: value,
    });
  };

  render() {
    return (
      <div style={{ width: "100%"}}>
        <LabelField
          className={styles["input-title"]}
          label={this.config.label}
        />
        <div className={styles["input-select-container"]}>
          <div className={styles["input-select-selected"]} onClick={this.toggleOpen}>
            {this.state.value}
          </div>
          {this.state.open && (
            <div className={styles["input-select-items"]}>
              {this.config?.entries.map((option) => (
                <div
                  key={option.value}
                  className={styles["input-select-option"]}
                  onClick={() => this.onClick(option.label)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export { InputSelectComponent };
