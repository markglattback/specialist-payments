import { useReducer } from "react";

export type Schema = {
  initial: string;
  states: {
    [key: string]: State;
  };
};

type InitialisedSchema<S extends Schema, C, A extends Action<C>> = {
  initial: keyof S["states"];
  states: {
    [key in keyof S["states"]]: InitialisedState<S, C, A>;
  };
};

export type State = {
  [key: string]: string;
};

type InitialisedState<S extends Schema, C, A extends Action<C>> = {
  [k in A["type"]]?: keyof S["states"] | InitialisedCustomTransition<S, C>;
};

export type Action<C extends Context> = {
  type: string;
  payload?: {
    [key in keyof C]: any;
  };
};

export type Context = {
  [key: string]: any;
};

type InitialisedStateAndContext<S extends Schema, C extends Context> = {
  state: keyof S["states"];
  context: C;
};

export type InitialisedCustomTransition<S extends Schema, C extends Context> = {
  (prevState: keyof S["states"], prevContext: C, args: Partial<C>):
    | InitialisedStateAndContext<S, C>
    | keyof S["states"];
};

type InternalAction<S extends Schema, C extends Context> = {
  state: keyof S["states"];
  context?: C;
};

export type CustomDispatch<C, A extends Action<C>> = {
  (action: A): void;
};

export default function useCustomReducer<
  S extends Schema,
  C extends Context,
  A extends Action<C>
>(
  schema: InitialisedSchema<S, C, A>,
  context: C
): [InitialisedStateAndContext<S, C>, CustomDispatch<C, A>] {
  function init(initialArgs: C): InitialisedStateAndContext<S, C> {
    return { state: schema.initial, context: initialArgs };
  }

  function reducer(
    prevState: InitialisedStateAndContext<S, C>,
    action: InternalAction<S, C>
  ): InitialisedStateAndContext<S, C> {
    const newState = action.state;
    const newContext = action.context || prevState.context;

    return {
      state: newState,
      context: newContext,
    };
  }

  const [state, dispatch] = useReducer(reducer, context, init);

  function customDispatch<A extends Action<C>>(action: A) {
    const { type, ...args } = action;
    const currentState = schema.states[state.state];
    const nextState = currentState[type as A["type"]];
    const partialContext = (args as unknown) as Partial<C>;

    if (nextState) {
      if (typeof nextState === "string") {
        dispatch({ state: nextState });
      } else if (typeof nextState === "function") {
        const result = nextState(state.state, state.context, partialContext);
        if (typeof result === "string") {
          dispatch({ state: result });
        } else if (typeof result === "object") {
          dispatch(result);
        }
      }
    }
    return;
  }

  return [state, customDispatch];
}
