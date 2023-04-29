import { Dispatch, SetStateAction, createContext, useContext } from "react";

const ActiveContext = createContext<number>(0);

const SetActiveContext = createContext<Dispatch<SetStateAction<number>>>(
  (value) => {}
);

const useActiveContext = () => {
  return useContext(ActiveContext);
};

const useSetActiveContext = () => {
  return useContext(SetActiveContext);
};

export {
  ActiveContext,
  SetActiveContext,
  useActiveContext,
  useSetActiveContext,
};
