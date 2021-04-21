import React,{createContext,useContext,useReducer} from "react";

export const DateLayerContext=createContext();

export const DataLayer=({initialState,reducer,children})=>(
    
    <DateLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
  </DateLayerContext.Provider>
);

//export const useDataLayerValue=()=>useContext(DateLayerContext);