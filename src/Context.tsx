import { createContext, useReducer } from "react";

export const linkIDContext = createContext(null);
export const linkIDDispatchContext = createContext(null);

export function QuickStartProvider({ children }) {
  const [linkID, dispatch] = useReducer();
}

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
