import { Action, PartOneState, PartOneInputs } from "./types";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import TextInput from "../TextInput";

export default function FormPartOne({
  state,
  dispatch,
  disabled,
}: {
  state: PartOneState;
  dispatch: Dispatch<Action>;
  disabled: boolean;
}) {
  const [invalidInputs, setValidInputs] = useState({
    [PartOneInputs.firstName]: false,
    [PartOneInputs.lastName]: false,
    [PartOneInputs.email]: false,
    [PartOneInputs.phone]: false,
    [PartOneInputs.business]: false,
  });

  useEffect(() => {
    console.log("useEffect in partOne called", state);

    for (let error in state.validationFailures) {
      setValidInputs({
        ...invalidInputs,
        [`${state.validationFailures[error]}`]: true,
      });
    }
  }, [JSON.stringify(state)]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: e.target.name, value: e.target.value } as {
      type: PartOneInputs;
      value: string;
    });
  }

  return (
    <fieldset disabled={disabled}>
      <legend>Your Details</legend>
      <TextInput
        type="text"
        name={PartOneInputs.firstName}
        value={state.firstName}
        onChange={handleChange}
        label="First Name"
        invalid={invalidInputs[PartOneInputs.firstName]}
      />
      <TextInput
        type="text"
        name={PartOneInputs.lastName}
        value={state.lastName}
        onChange={handleChange}
        label="Last Name"
        invalid={invalidInputs[PartOneInputs.lastName]}
      />
      <TextInput
        type="email"
        name={PartOneInputs.email}
        value={state.email}
        onChange={handleChange}
        label="Email Address"
        invalid={invalidInputs[PartOneInputs.email]}
      />
      <TextInput
        type="text"
        name={PartOneInputs.phone}
        inputMode="numeric"
        pattern="[0-9]*"
        value={state.phone}
        onChange={handleChange}
        label="Contact Number"
        invalid={invalidInputs[PartOneInputs.phone]}
      />
      <TextInput
        type="text"
        name={PartOneInputs.business}
        value={state.business}
        onChange={handleChange}
        label="Business Name"
        invalid={invalidInputs[PartOneInputs.business]}
      />
    </fieldset>
  );
}
