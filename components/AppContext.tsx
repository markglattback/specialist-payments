import {
  useContext,
  useReducer,
  createContext,
  ReactNode,
  ReactChildren,
  Dispatch,
} from "react";

type State = {
  mobile: boolean;
};

type Action = { type: "ENTER_MOBILE_MODE" } | { type: "EXIT_MOBILE_MODE" };

const initialState: State = {
  mobile: false,
};

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

const store = createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

export default function AppContext({ children }: { children: ReactNode }) {
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "ENTER_MOBILE_MODE":
        return { ...state, mobile: true };
      case "EXIT_MOBILE_MODE":
        return { ...state, mobile: false };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { Provider } = store;

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export const useAppContext = () => {
  return useContext(store);
};
