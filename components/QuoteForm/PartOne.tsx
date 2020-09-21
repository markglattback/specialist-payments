import { Action, PartOneState, PartOneInputs } from "./types";
import { ChangeEvent, Dispatch } from "react";
import TextInput from "../TextInput";

export default function FormPartOne({
  state,
  dispatch,
}: {
  state: PartOneState;
  dispatch: Dispatch<Action>;
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: e.target.name, value: e.target.value } as {
      type: PartOneInputs;
      value: string;
    });
  }

  return (
    <fieldset>
      <legend>Your Details</legend>
      <TextInput
        type="text"
        name={PartOneInputs.firstName}
        value={state.firstName}
        onChange={handleChange}
        label="First Name"
      />
      <TextInput
        type="text"
        name={PartOneInputs.lastName}
        value={state.lastName}
        onChange={handleChange}
        label="Last Name"
      />
      <TextInput
        type="email"
        name={PartOneInputs.email}
        value={state.email}
        onChange={handleChange}
        label="Email Address"
      />
      <TextInput
        type="text"
        name={PartOneInputs.phone}
        inputMode="numeric"
        pattern="[0-9]*"
        value={state.phone}
        onChange={handleChange}
        label="Contact Number"
      />
      <TextInput
        type="text"
        name={PartOneInputs.business}
        value={state.business}
        onChange={handleChange}
        label="Business Name"
      />
    </fieldset>
  );
}
