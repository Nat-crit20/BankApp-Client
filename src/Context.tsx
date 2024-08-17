import React, { createContext, useReducer, ReactNode, FC } from "react";
interface QuickStartState {
  linkTokenID: string;
}
type QuickStartAction = {
  type: string;
  state: Partial<QuickStartState>;
};
const initialState: QuickStartState = {
  linkTokenID: "",
};

const Context = createContext(initialState);
const { Provider } = Context;

export const QuickStartProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  function QuickStartReducer(state: QuickStartState, action: QuickStartAction) {
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

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default Context;
