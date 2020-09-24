import {
  PartOneState,
  PartOneInputs,
  PartTwoState,
  PartTwoInputs,
  CheckBoxInputs,
  Action,
  FormState,
  FormStages,
} from "./types";
import { useReducer, FormEvent } from "react";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import Button from "styled-components/Button";
import styled from "styled-components";

const Form = styled.form`
  legend {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--brand);
    margin-bottom: 1.5rem;
  }
`;

export default function QuoteForm() {
  // *** Form Part One Setup

  const initialPartOneState: PartOneState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    business: "",
  };

  function partOneReducer(state: PartOneState, action: Action): PartOneState {
    switch (action.type) {
      case PartOneInputs.firstName:
        return { ...state, firstName: action.value };
      case PartOneInputs.lastName:
        return { ...state, lastName: action.value };
      case PartOneInputs.email:
        return { ...state, email: action.value };
      case PartOneInputs.phone:
        return { ...state, phone: action.value };
      case PartOneInputs.business:
        return { ...state, business: action.value };
      case "reset":
        return initialPartOneState;
      default:
        return state;
    }
  }

  const [partOneState, partOneDispatch] = useReducer(
    partOneReducer,
    initialPartOneState
  );

  // *** Form Part Two Setup

  const initialPartTwoState: PartTwoState = {
    customerType: "",
    businessType: "",
    turnover: "",
    paymentTypes: {
      cardMachine: false,
      website: false,
      phone: false,
      email: false,
    },
    comments: "",
  };

  function partTwoReducer(state: PartTwoState, action: Action): PartTwoState {
    switch (action.type) {
      case PartTwoInputs.customerType:
        return { ...state, customerType: action.value };
      case PartTwoInputs.businessType:
        return { ...state, businessType: action.value };
      case PartTwoInputs.turnover:
        return { ...state, turnover: action.value };
      case PartTwoInputs.comments:
        return { ...state, comments: action.value };
      case CheckBoxInputs.cardMachine:
        return {
          ...state,
          paymentTypes: {
            ...state.paymentTypes,
            cardMachine: action.checked ? true : false,
          },
        };
      case CheckBoxInputs.website:
        return {
          ...state,
          paymentTypes: {
            ...state.paymentTypes,
            website: action.checked ? true : false,
          },
        };
      case CheckBoxInputs.email:
        return {
          ...state,
          paymentTypes: {
            ...state.paymentTypes,
            email: action.checked ? true : false,
          },
        };
      case CheckBoxInputs.phone:
        return {
          ...state,
          paymentTypes: {
            ...state.paymentTypes,
            phone: action.checked ? true : false,
          },
        };
      case "reset":
        return initialPartTwoState;
      default:
        return state;
    }
  }

  const [partTwoState, partTwoDispatch] = useReducer(
    partTwoReducer,
    initialPartTwoState
  );

  // *** Main Form Setup

  const initialFormState: FormState = {
    stage: FormStages.STAGE_ONE,
    partOneState: initialPartOneState,
    partTwoState: initialPartTwoState,
    submitted: false,
    success: false,
    failure: false,
  };

  function formReducer(state: FormState, action: Action): FormState {
    switch (action.type) {
      case "next":
        return { ...state, stage: FormStages.STAGE_TWO, partOneState };
      case "back":
        return { ...state, stage: FormStages.STAGE_ONE, partTwoState };
      case "reset":
        partOneDispatch({ type: "reset" });
        partTwoDispatch({ type: "reset" });
        return initialFormState;
      case "submit":
        return { ...state, submitted: true };
      case "success":
        return { ...initialFormState, success: true };
      case "failure":
        return { ...state, submitted: false, failure: true };
      default:
        return state;
    }
  }

  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  function nextStage() {
    formDispatch({ type: "next" });
  }

  function prevStage() {
    formDispatch({ type: "back" });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // disable the form
    formDispatch({ type: "submit" });

    const data = {
      ...partOneState,
      ...partTwoState,
    };

    fetch("/api/sendQuote", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        const result = await res.json();
        if (res.status >= 200 && res.status < 300) {
          formDispatch({ type: "success" });
        } else {
          formDispatch({ type: "failure" });
        }
      })
      .catch((err) => {
        formDispatch({ type: "failure" });
      });
  }

  if (formState.success) {
    return <div>Success</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      {formState.stage === FormStages.STAGE_ONE && (
        <>
          <PartOne
            state={partOneState}
            dispatch={partOneDispatch}
            disabled={formState.submitted}
          />
          <Button
            type="button"
            onClick={nextStage}
            disabled={formState.submitted}
          >
            Next
          </Button>
        </>
      )}
      {formState.stage === FormStages.STAGE_TWO && (
        <>
          <PartTwo
            state={partTwoState}
            dispatch={partTwoDispatch}
            disabled={formState.submitted}
          />
          <Button
            type="button"
            onClick={prevStage}
            disabled={formState.submitted}
          >
            Back
          </Button>
          <Button type="submit" primary disabled={formState.submitted}>
            Submit
          </Button>
          {formState.failure && (
            <div>It looks like something went wrong - please try again.</div>
          )}
        </>
      )}
    </Form>
  );
}
