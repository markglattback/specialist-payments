import { SyntheticEvent, MouseEvent, useRef } from "react";
import { DropdownProps, Options } from "./types";
import styled from "styled-components";

const DropDownWrapper = styled.div`
  position: absolute;
  width: min(100%, 450px);
  padding: 0.25rem 0;
  background: white;
  color: var(--backgroundShade);
  font-weight: 700;
  border: 1px solid var(--backgroundShade);
  box-shadow: 0 0px 0 3px var(--brand);
  z-index: var(--zIndexFront);
  transform: translateY(-2px);

  @media (max-width: 414px) {
    width: calc(100vw - var(--paddingDouble));
  }
`;

export default function Dropdown({
  dispatch,
  highlightedOption,
  options,
  parent,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(e: SyntheticEvent<HTMLDivElement>) {
    e.preventDefault(); // prevents blur happening

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

    // hide dropdown immediately otherwise there'll be a delay
    // before mouseup is fired
    dropdownRef.current?.setAttribute("style", "opacity: 0;");
  }

  function handleMouseUp(e: MouseEvent) {
    // prevent other select elements from firing mouseup handler
    e.nativeEvent.stopImmediatePropagation();

    // this will unmount dropdown
    dispatch({
      type: "TOGGLE",
    });
  }

  return (
    <DropDownWrapper
      ref={dropdownRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
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
    </DropDownWrapper>
  );
}
