import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Intitial State
const initialState = {
  events: [],
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function addEvent(event) {
    dispatch({
      type: "ADD_EVENT",
      payload: event,
    });
  }
  function deleteEvent(id) {
    dispatch({
      type: "DELETE_EVENT",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        events: state.events,
        addEvent,
        deleteEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
