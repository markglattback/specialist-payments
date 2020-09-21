import { Action, PartTwoState, PartTwoInputs, CheckBoxInputs } from "./types";
import { ChangeEvent, Dispatch } from "react";
import Select from "../Select/Select";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import CheckBoxGroup from "../CheckBoxGroup";
import Label from "styled-components/Label";

export default function FormPartTwo({
  state,
  dispatch,
}: {
  state: PartTwoState;
  dispatch: Dispatch<Action>;
}) {
  function handleChange(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    dispatch({ type: e.target.name, value: e.target.value } as {
      type: PartTwoInputs;
      value: string;
    });
  }

  function handleSelectChange({
    name,
    value,
  }: {
    name: PartTwoInputs;
    value: string;
  }) {
    dispatch({ type: name, value });
  }

  function handleCBChange(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked ? true : false;

    dispatch({ type: e.target.name, value: "", checked } as {
      type: CheckBoxInputs;
      checked: boolean;
    });
  }

  return (
    <fieldset>
      <legend>Your Business</legend>
      <Select<PartTwoInputs>
        name={PartTwoInputs.customerType}
        label="Customer Type"
        value={state.customerType}
        onChange={handleSelectChange}
        options={[
          { value: "New", displayValue: "I am a new customer" },
          {
            value: "Switching",
            displayValue: "I want to switch from my current provider",
          },
        ]}
        placeholder="Please select an option..."
      />

      <Select<PartTwoInputs>
        name={PartTwoInputs.businessType}
        label="Business Type"
        value={state.businessType}
        onChange={handleSelectChange}
        options={[
          { value: "permanent", displayValue: "Permanent" },
          { value: "temporary", displayValue: "Temporary" },
          { value: "seasonal", displayValue: "Seasonal" },
        ]}
        placeholder="Please select an option..."
      />

      <Select<PartTwoInputs>
        name={PartTwoInputs.turnover}
        label="Turnover"
        value={state.turnover}
        onChange={handleSelectChange}
        options={[
          { value: "1k", displayValue: "Up to £1,000" },
          { value: "10k", displayValue: "Up to £10,000" },
          { value: "50k", displayValue: "Up to £50,000" },
          { value: "100k", displayValue: "Up to £100,000" },
          { value: "500k", displayValue: "Up to £500,000" },
          { value: "1m", displayValue: "Up to £1,000,000" },
          { value: "unknown", displayValue: "I'm not sure" },
        ]}
        placeholder="Please select an option..."
      />

      <Label htmlFor="Payment Types">Payment Types</Label>

      <CheckBoxGroup>
        <CheckBox
          name={CheckBoxInputs.cardMachine}
          label="CardMachines"
          onChange={handleCBChange}
          value={state.paymentTypes.cardMachine}
        />
        <CheckBox
          name={CheckBoxInputs.website}
          label="Via a Website"
          onChange={handleCBChange}
          value={state.paymentTypes.website}
        />
        <CheckBox
          name={CheckBoxInputs.email}
          label="Via Email Link"
          onChange={handleCBChange}
          value={state.paymentTypes.email}
        />
        <CheckBox
          name={CheckBoxInputs.phone}
          label="Over the Phone"
          onChange={handleCBChange}
          value={state.paymentTypes.phone}
        />
      </CheckBoxGroup>

      <TextArea
        name={PartTwoInputs.comments}
        label="Comments"
        onChange={handleChange}
        value={state.comments}
      />
    </fieldset>
  );
}
