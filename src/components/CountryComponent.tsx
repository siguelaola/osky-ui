import React from "react";
import { ComponentProps } from "./ScreenComponent";
import { CountryBlockData } from "../interfaces/types";
import { InputSelectComponent } from "./InputSelectComponent";
import countryRegionData from "country-region-data/dist/data-umd";

type CountryState = {
  country: string;
};

const countryEntries = countryRegionData.reduce((result, current) => {
  result.push({ value: current.countryShortCode, label: current.countryName });
  return result;
}, []);

export class CountryComponent extends React.Component<
  ComponentProps,
  CountryState
> {
  config: CountryBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = this.props.data as CountryBlockData;

    this.state = {
      country: this.props.value ?? this.config.country,
    };
  }

  componentDidMount(): void {
      this.props.onChange(this.props.id, this.state, false)
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <InputSelectComponent
          id={this.props.id}
          value={this.state.country}
          data={{
            label: "Country",
            defaultValue: "",
            entries: countryEntries,
          }}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
