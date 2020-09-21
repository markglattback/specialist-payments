import { useState, Dispatch, SetStateAction, useRef } from "react";

export type Context = {
  [key: string]: any;
};

export type PartialContext<TContext, TEvent> = Extract<TEvent, TContext>;

export type StateSchema<
  TContext,
  TEvent extends CustomEventObject<TContext>
> = {
  id: string;
  initial: string;
  states: States<TContext, TEvent>;
  [key: string]: any;
};

export type States<TContext, TEvent extends CustomEventObject<TContext>> = {
  [key: string]: StateNode<TContext, TEvent>;
};

export type StateNode<TContext, TEvent extends CustomEventObject<TContext>> = {
  on: {
    [k in TEvent["type"]]?:
      | string
      | { target: string; action: Action<TContext, TEvent> };
  };
  type?: "final";
};

interface InitialisedStates<
  TContext,
  TEvent extends CustomEventObject<TContext>
> extends States<TContext, TEvent> {
  [key: string]: InitialisedState<TContext, TEvent>;
}

interface InitialisedState<
  TContext,
  TEvent extends CustomEventObject<TContext>
> extends StateNode<TContext, TEvent> {
  name: string;
}

export interface Action<TContext, TEvent> {
  (context: TContext, args: Partial<TContext>): TContext;
}

export type ActionArgs<TEvent> = Omit<TEvent, "type">;

export type EventObject = {
  type: string;
};

export type CustomEventObject<TContext> = EventObject &
  {
    [key in keyof TContext]?: TContext[key];
  };

class Machine<
  TContext,
  TStateSchema extends StateSchema<TContext, TEvent>,
  TEvent extends CustomEventObject<TContext>
> {
  private context: TContext;
  private initialContext: TContext;
  private states: InitialisedStates<TContext, TEvent>;
  private currentState: InitialisedState<TContext, TEvent>;
  private initialState: InitialisedState<TContext, TEvent>;
  private currentStateName: string;

  constructor(context: TContext, schema: TStateSchema) {
    this.context = context;
    this.initialContext = context;

    // Initialise States
    const states = {} as InitialisedStates<TContext, TEvent>;

    for (const key in schema.states) {
      states[key] = {
        ...schema.states[key],
        name: `${key}`,
      };
    }

    this.states = states;

    this.currentState = this.initialState = this.states[schema.initial];
    this.currentStateName = this.currentState.name;
  }

  public dispatch(event: TEvent): InitialisedState<TContext, TEvent> {
    const { type, ...eventArgs } = event;
    const actionArgs: PartialContext<
      TEvent,
      TContext
    > = eventArgs as PartialContext<TEvent, TContext>;

    let nextStateName: string = "";
    let action: Action<TContext, TEvent> | undefined;

    const nextState = this.currentState.on[type as TEvent["type"]];

    if (nextState) {
      if (typeof nextState === "string") {
        nextStateName = nextState;
      } else if (typeof nextState === "object") {
        const { target, action: _action } = nextState as {
          target: string;
          action: Action<TContext, TEvent>;
        };
        nextStateName = target;
        action = _action;
      }

      this.setNewState(nextStateName);

      if (action) {
        const newContext = action(this.context, { ...actionArgs });
        this.context = newContext;
      }
    }

    return this.currentState;
  }

  public getContext(): TContext {
    return this.context;
  }

  public getState(): InitialisedState<TContext, TEvent>["name"] {
    return this.currentStateName;
  }

  public reset() {
    this.setNewState(this.initialState.name);
    this.context = this.initialContext;
  }

  private setNewState(name: string): InitialisedState<TContext, TEvent> {
    this.currentState = this.states[name];
    this.currentStateName = name;

    return this.currentState;
  }
}

export interface DispatchEvent<TEvent> {
  (event: TEvent): void;
}

export default function useMachine<
  TContext,
  TStateSchema extends StateSchema<TContext, TEvent>,
  TEvent extends CustomEventObject<TContext>
>(
  context: TContext,
  schema: TStateSchema
): [
  string,
  TContext,
  DispatchEvent<TEvent>,
  Machine<TContext, TStateSchema, TEvent>
] {
  const [state, setState] = useState(schema.initial);
  const [machineContext, setContext] = useState(context);
  const machine = new Machine<TContext, TStateSchema, TEvent>(context, schema);

  function dispatch(event: TEvent) {
    const { name } = machine.dispatch(event);
    setState(name);
    setContext(machine.getContext());
  }

  const instanceOfDispatch = useRef(dispatch);

  return [state, machineContext, instanceOfDispatch.current, machine];
}
