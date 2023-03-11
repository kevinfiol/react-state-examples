import React from 'react';
import produce from "immer"
import { createContext, useContext, useReducer } from 'react';

const StateContext = createContext(null);
const DispatchContext = createContext(null);

const initialState = {
  count: 10
};

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(
    produce,
    initialState
  );

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useState() {
  return useContext(StateContext);
}

export function useDispatch() {
  return useContext(DispatchContext);
}