import React from "react";
import { InputComponent } from "./InputComponent";
import styles from "../styles/AddressComponent.module.css";
import { ComponentProps } from "./ScreenComponent";
import { AddressBlockData } from "../interfaces/types";
import { CountryComponent } from "./CountryComponent";

interface AddressState {
  address: string;
  address1: string;
  city: string;
  postalCode: string;
  country: string;
}

class AddressComponent extends React.Component<ComponentProps, AddressState> {
  config: AddressBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = props.data as AddressBlockData;

    this.state = (this.props.value as unknown as AddressState) ?? {
      address: null,
      address1: null,
      postalCode: null,
      city: null,
      country: null,
    };
  }

  handleInputChange = (id: string, value: any, isValid: boolean) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        [id]: value,
      }),
      () => {
        this.props.onChange(this.props.id, this.state, true);
      }
    );
  };

  render() {
    const addressInput = {
      id: "address",
      type: "input-text",
      data: {
        label: "Address",
      },
    };

    const addressInput1 = {
      id: "address1",
      type: "input-text",
      data: {
        label: "",
      },
    };

    const zipInput = {
      id: "postalCode",
      type: "input-text",
      data: {
        label: "Postal Code",
      },
    };

    const cityInput = {
      id: "city",
      type: "input-text",
      data: {
        label: "City",
      },
    };

    return (
      <div className={styles.address}>
        <div className={styles["address-container"]}>
          <InputComponent
            value={this.state.address}
            onChange={this.handleInputChange}
            {...addressInput}
          />
          <InputComponent
            value={this.state.address1}
            onChange={this.handleInputChange}
            {...addressInput1}
          />
        </div>
        <div className={`${styles["address-container"]} ${styles.horizontal}`}>
          <div className={`${styles.column} ${styles.column25}`}>
            <InputComponent
              value={this.state.postalCode}
              onChange={this.handleInputChange}
              {...zipInput}
            />
          </div>
          <div className={`${styles.column} ${styles.column75}`}>
            <InputComponent
              value={this.state.city}
              onChange={this.handleInputChange}
              {...cityInput}
            />
          </div>
        </div>
        <div>
          <CountryComponent
            id={"country"}
            value={this.state.country}
            data={{}}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export { AddressComponent };
