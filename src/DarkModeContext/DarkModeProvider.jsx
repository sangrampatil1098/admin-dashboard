import { TryRounded } from "@mui/icons-material";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

const reducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return {
        darkMode: false,
      };
    case "DARK":
      return {
        darkMode: true,
      };
    case "TOGGLE":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return INITIAL_STATE;
  }
};

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const context = {
    darkMode: state.darkMode,
    dispatch,
  };
  return (
    <DarkModeContext.Provider value={context}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
