import React, { useContext, createContext, useReducer } from "react";

export interface state {
  prop1: string;
  prop2: string;
}

const initialState = { prop1: "prop1", prop2: "prop2" };

export type action = { type: "prop1" } | { type: "prop2" };

const defaultDispatch: React.Dispatch<action> = () => initialState;

const RawProvider = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

interface ProviderInput {
  reducer: React.Reducer<state, action>;
  initialState: state;
  children: React.ReactNode;
}

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: ProviderInput) => {
  const [state, dispatch] = useReducer<React.Reducer<state, action>>(
    reducer,
    initialState
  );
  return (
    <RawProvider.Provider value={{ state, dispatch }}>
      {children}
    </RawProvider.Provider>
  );
};

export const Store = () => useContext(RawProvider);
