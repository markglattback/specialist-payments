import { MouseEvent, useEffect, useRef, FocusEvent } from "react";
import styled from "styled-components";
import Label from "../../styled-components/Label";
import Clear from "./Clear";
import ToggleButton from "./ToggleButton";
import {
  Options,
  SelectSchema,
  SelectActions,
  SelectContext,
  SelectProps,
} from "./types";
import useMachine, {
  Action,
  InitialisedCustomTransition,
} from "../../hooks/useCustomReducer";

import Dropdown from "./Dropdown";

const SelectWrapper = styled.div`
  background: var(--white);
  backdrop-filter: blur(5px);
  color: var(--backgroundShade);
  font-weight: 300;
  width: min(100%, 450px);
  margin: 0.25rem 0 1rem 0;
  border: 1px solid var(--backgroundShade);
  cursor: default;

  :focus {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 2px var(--foreground);
    outline: none;
  }

  :focus div.options {
    border-top: 1px solid var(--background);
  }

  div {
    background: transparent;
    cursor: default;
  }

  div.input {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  div.value {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    overflow-x: hidden;
    white-space: nowrap;
  }

  div.options {
    border-top: 1px solid transparent;
  }

  div.select-buttons {
    display: flex;
  }

  div.select-button {
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
  }

  span.button-seperator {
    align-self: stretch;
    width: 1px;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  span.arrow-down,
  span.arrow-up {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 0.3rem solid transparent;
    border-right: 0.3rem solid transparent;
  }

  span.arrow-down {
    border-top: 0.3rem solid var(--background);
  }

  span.arrow-up {
    border-bottom: 0.3rem solid var(--background);
  }
`;

const StyledLabel = styled.label`
  display: block;
`;

export default function Select<I extends string>({
  name,
  value,
  label,
  placeholder,
  options,
  onChange,
}: SelectProps<I>) {
  function getSelectionIndex(context: SelectContext): number | undefined {
    const { selection } = context;
    return selection.index;
  }

  const handleArrowUp: InitialisedCustomTransition<
    SelectSchema,
    SelectContext
  > = (prevState, prevContext) => {
    const { options } = prevContext;

    // if select is closed
    if (prevState === "closedWithFocus" || prevState === "idle") {
      return {
        state: "open",
        context: {
          ...prevContext,
          highlightedOption: options.length - 1,
        },
      };
    } else {
      let { highlightedOption } = prevContext;
      const index = getSelectionIndex(prevContext);

      if (typeof highlightedOption === "undefined") {
        highlightedOption = options.length - 1;
      } else {
        if (highlightedOption > 0) highlightedOption -= 1;
      }

      const nextState = highlightedOption === 0 ? "closedWithFocus" : "open";

      return {
        state: nextState,
        context: {
          ...prevContext,
          highlightedOption:
            nextState === "closedWithFocus" ? index : highlightedOption,
        },
      };
    }
  };

  const handleArrowDown: InitialisedCustomTransition<
    SelectSchema,
    SelectContext
  > = (prevState, prevContext) => {
    if (prevState === "closedWithFocus" || prevState === "idle") {
      const index = getSelectionIndex(prevContext);

      return {
        state: "open",
        context: {
          ...prevContext,
          highlightedOption: typeof index === "undefined" ? 0 : index,
        },
      };
    } else {
      let { highlightedOption, options } = prevContext;

      if (typeof highlightedOption === "undefined") {
        highlightedOption = 0;
      } else {
        if (highlightedOption < options.length - 1) {
          highlightedOption += 1;
        }
      }

      return {
        state: "open",
        context: {
          ...prevContext,
          highlightedOption,
        },
      };
    }
  };

  const handleSelect: InitialisedCustomTransition<
    SelectSchema,
    SelectContext
  > = (prevState, prevContext, { selection }) => {
    const newSelection = selection as SelectContext["selection"];
    const value = newSelection.value || "";

    onChange({ name, value });

    return {
      state: "closedWithFocus",
      context: {
        ...prevContext,
        highlightedOption: newSelection.index,
        selectedOption: newSelection.index,
        selection: newSelection,
      },
    };
  };

  const handleReset: InitialisedCustomTransition<
    SelectSchema,
    SelectContext
  > = (prevState, prevContext) => {
    onChange({ name, value: "" });

    return {
      state: prevState,
      context: {
        ...prevContext,
        highlightedOption: 0,
        selectedOption: 0,
        selection: {
          value: undefined,
          displayValue: undefined,
          index: undefined,
        },
      },
    };
  };

  const handleToggle: InitialisedCustomTransition<
    SelectSchema,
    SelectContext
  > = (prevState, prevContext) => {
    const nextState = prevState === "open" ? "closedWithFocus" : "open";
    const index = getSelectionIndex(prevContext);

    return {
      state: nextState,
      context: {
        ...prevContext,
        highlightedOption: typeof index === "undefined" ? 0 : index,
      },
    };
  };

  const handleBlur: InitialisedCustomTransition<SelectSchema, SelectContext> = (
    prevState,
    prevContext
  ) => {
    const index = getSelectionIndex(prevContext);

    return {
      state: "idle",
      context: {
        ...prevContext,
        highlightedOption: typeof index === "undefined" ? 0 : index,
      },
    };
  };

  type Selection = SelectContext["selection"];

  // Get initial context from value prop
  function getInitialSelection(value: string): Selection {
    let selection: Selection = {
      value: undefined,
      displayValue: undefined,
      index: undefined,
    };

    options.forEach((option, index) => {
      if (option.value === value) {
        selection = {
          ...option,
          index,
        };
      }
    });

    return selection;
  }
  const initialSelection = getInitialSelection(value);

  const [{ state, context }, dispatch] = useMachine<
    SelectSchema,
    SelectContext,
    SelectActions
  >(
    {
      initial: "idle",
      states: {
        idle: {
          BLUR: handleBlur,
          FOCUS: "closedWithFocus",
          RESET: handleReset,
          TOGGLE: handleToggle,
        },
        open: {
          ARROW_DOWN: handleArrowDown,
          ARROW_UP: handleArrowUp,
          BLUR: handleBlur,
          RESET: handleReset,
          SELECT: handleSelect,
          TOGGLE: handleToggle,
        },
        closedWithFocus: {
          BLUR: handleBlur,
          RESET: handleReset,
          TOGGLE: handleToggle,
        },
      },
    },
    {
      highlightedOption: 0,
      selection: initialSelection,
      options,
    }
  );

  const parent = useRef<HTMLDivElement>(null);

  function handleMouseUpEvent(e: MouseEvent) {
    console.log("toggled from inside select handleMouseUp");

    const { button } = e.nativeEvent;
    if (button === 0 || button === 1) {
      dispatch({ type: "TOGGLE" });
    }
  }

  function handleFocusEvent(e: FocusEvent) {
    console.log("focus event");

    dispatch({ type: "FOCUS" });
  }

  function handleBlurEvent(e: FocusEvent) {
    console.log("blueevent");

    dispatch({ type: "BLUR" });
  }

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      // if input isn't focused don't handle keyboard events
      if (state === "idle") return;

      const key = e.key;

      switch (key) {
        case "ArrowDown":
          dispatch({ type: "ARROW_DOWN" });
          break;
        case "ArrowUp":
          dispatch({ type: "ARROW_UP" });
          break;
        default:
          return;
      }
    }

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div>
      <Label>
        {label}
        <SelectWrapper
          tabIndex={0}
          ref={parent}
          onMouseUp={handleMouseUpEvent}
          onFocus={handleFocusEvent}
          onBlur={handleBlurEvent}
        >
          <input type="hidden" name={name} value={value || ""} />
          <div className="input">
            <div className="value">
              <span>{context.selection.displayValue || placeholder}</span>
            </div>

            <div className="select-buttons">
              {context.selection.value && (
                <>
                  <div
                    className="select-button"
                    onMouseUp={(e) => {
                      console.log("clear mouseup");

                      e.stopPropagation();

                      // prevents dropdown document handler running
                      e.nativeEvent.stopImmediatePropagation();

                      dispatch({ type: "RESET" });
                    }}
                  >
                    <Clear
                      color="var(--backgroundHighTint)"
                      hover="var(--backgroundShade)"
                    />
                  </div>
                  <span
                    className="button-seperator"
                    style={{ background: "var(--backgroundShade)" }}
                  ></span>
                </>
              )}
              {state !== "open" && (
                <div className="select-button">
                  <ToggleButton color="var(--backgroundShade)" />
                </div>
              )}
              {state === "open" && (
                <div className="select-button">
                  <ToggleButton color="var(--backgroundShade)" reverse={true} />
                </div>
              )}
            </div>
          </div>
          {state === "open" && (
            <Dropdown
              options={options}
              dispatch={dispatch}
              parent={parent}
              highlightedOption={context.highlightedOption}
            />
          )}
        </SelectWrapper>
      </Label>
    </div>
  );
}
