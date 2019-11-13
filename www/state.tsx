import React, { createContext, FunctionComponent, useContext, useReducer } from "react";

const StateContext = createContext({});

interface stateProps {
    reducer: any;
    state: any;
    children: any;
}

export const StateProvider: FunctionComponent<stateProps> = ({ reducer, state, children }) => (
    <StateContext.Provider value={useReducer(reducer, state)}>
        {children}
    </StateContext.Provider>
);

export const connect = () => useContext(StateContext);

export const setState = (prevState: any, nextState: any) => Object.assign({}, prevState, nextState);
