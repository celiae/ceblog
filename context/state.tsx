import React, { createContext, useContext } from "react";

const AppContext = createContext("light");

export function AppWrapper(children: React.ReactElement) {
  let sharedState = "dark";
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
