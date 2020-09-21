import { Dispatch, RefObject, ChangeEvent } from "react";
import { CustomDispatch } from "../../hooks/useCustomReducer";

type Selection = {
  value: string | undefined;
  displayValue: string | undefined;
  index: number | undefined;
};

export type SelectContext = {
  highlightedOption: number | undefined;
  selection: {
    value: string | undefined;
    displayValue: string | undefined;
    index: number | undefined;
  };
  options: Options[];
};

export type SelectActions =
  | { type: "TOGGLE" }
  | { type: "SELECT"; selection: Selection }
  | { type: "OPTION_MOUSE_ENTER"; index: number }
  | { type: "OPTION_MOUSE_LEAVE"; index: number }
  | { type: "ARROW_UP" }
  | { type: "ARROW_DOWN" }
  | { type: "FOCUS" }
  | { type: "BLUR" }
  | { type: "RESET" };

export type SelectSchema = {
  initial: string;
  states: {
    idle: {};
    open: {};
    closedWithFocus: {};
  };
};

export type Options = {
  displayValue: string;
  value: string;
};

export type SelectProps<I> = {
  name: I;
  value: string;
  label: string;
  options: Options[];
  onChange: SelectChangeHandler<I>;
  placeholder: string;
  [key: string]: any;
};

export type SelectChangeHandler<I> = {
  ({ name, value }: { name: I; value: string }): void;
};

export type DropdownProps = {
  options: Options[];
  dispatch: CustomDispatch<SelectContext, SelectActions>;
  parent: RefObject<HTMLDivElement>;
  highlightedOption: undefined | number;
};
