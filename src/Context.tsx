import { createContext, useReducer, ReactNode, Dispatch, FC } from "react";
interface QuickStartState {
  linkTokenID: string;
}
type QuickStartAction = {
  type: "SET_STATE";
  state: Partial<QuickStartState>;
};
interface QuickStartContext extends QuickStartState {
  dispatch: Dispatch<QuickStartAction>;
}
const initialState: QuickStartState = {
  linkTokenID: "",
};

const Context = createContext(initialState as QuickStartContext);
const { Provider } = Context;

export const QuickStartProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  function QuickStartReducer(
    state: QuickStartState,
    action: QuickStartAction
  ): QuickStartState {
    switch (action.type) {
      case "SET_STATE": {
        return { ...state, ...action.state };
      }
      default: {
        return { ...state };
      }
    }
  }
  const [state, dispatch] = useReducer(QuickStartReducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export default Context;
