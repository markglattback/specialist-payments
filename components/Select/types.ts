import {
  Dispatch,
  RefObject,
  ChangeEvent,
  FocusEvent,
  PropsWithoutRef,
} from "react";
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

export type SelectProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  options: Options[];
  placeholder: string;
  onBlur: FocusEvent;
  onChange: ChangeEvent;
  errors: string | undefined;
  touched: boolean | undefined;
} & PropsWithoutRef<JSX.IntrinsicElements["input"]>;

export type SelectChangeHandler = {
  ({ name, value }: { name: string; value: string }): void;
};

export type DropdownProps = {
  options: Options[];
  dispatch: CustomDispatch<SelectContext, SelectActions>;
  parent: RefObject<HTMLDivElement>;
  highlightedOption: undefined | number;
};
