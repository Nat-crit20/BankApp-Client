import { createContext, useReducer } from "react";
interface QuickStateState {
  linkTokenID: string;
}
const initialState = {
  linkTokenID: null,
};
const Context = createContext(initialState);
const { Provider } = Context;

export function QuickStartProvider({ children }) {
  function QuickStartReducer(state, action) {
    switch (action.type) {
      case "SET_STATE": {
        return { ...state, ...action.type };
      }
      default: {
        return { ...state };
      }
    }
  }
  const [state, dispatch] = useReducer(QuickStartReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export default Context;
