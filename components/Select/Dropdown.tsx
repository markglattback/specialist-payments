import { SyntheticEvent } from "react";
import { DropdownProps, Options } from "./types";

export default function Dropdown({
  dispatch,
  highlightedOption,
  options,
  parent,
}: DropdownProps) {
  function handleMouseUp(e: SyntheticEvent<HTMLDivElement>) {
    e.stopPropagation();

    const el = e.target as HTMLDivElement;
    const value = el.dataset.value as string;
    const displayValue = el.dataset.displayvalue as string;
    const index = Number(el.dataset.index);

    dispatch({
      type: "SELECT",
      selection: {
        value,
        displayValue,
        index,
      },
    });

    parent.current?.focus();
  }

  return (
    <div className="options" onMouseUp={handleMouseUp}>
      {options.map((option, index) => {
        const highlighted = highlightedOption === index;

        return (
          <div
            key={`${option.value}-${index}`}
            data-value={option.value}
            data-displayvalue={option.displayValue}
            data-index={index}
            style={{
              background: `${
                highlighted ? "rgba(255,255,255,0.1)" : "transparent"
              }`,
              padding: "0.25rem 0.5rem",
            }}
          >
            {option.displayValue}
          </div>
        );
      })}
    </div>
  );
}
