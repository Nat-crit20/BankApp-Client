import { createContext, useReducer } from "react";

export const linkIDContext = createContext(null);
export const linkIDDispatchContext = createContext(null);

const initialState = {
  linkTokenID: null,
};

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
}
