import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transactions: [
    { id: 1, text: "Flowers", amount: -20 },
    { id: 2, text: "Books", amount: -100 },
    { id: 3, text: "Salary", amount: 27000 },
    { id: 4, text: "Rent", amount: -8000 },
  ],
};

//create context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
