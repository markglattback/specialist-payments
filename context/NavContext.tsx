import {
  useContext,
  useReducer,
  createContext,
  ReactNode,
  Dispatch,
} from "react";

type State = {
  open: boolean;
};

type Action = { type: "OPEN" } | { type: "CLOSE" };

const initialState: State = {
  open: false,
};

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

const store = createContext<Context>({
  state: initialState,
  dispatch: (action: Action) => {},
});

export default function AppContext({ children }: { children: ReactNode }) {
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "OPEN":
        return { ...state, open: true };
      case "CLOSE":
        return { ...state, open: false };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { Provider } = store;

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export const useNavContext = () => {
  return useContext(store);
};
