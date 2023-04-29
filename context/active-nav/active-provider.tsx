import React, { PropsWithChildren, useState } from "react";
import { ActiveContext, SetActiveContext } from "./active";

const ActiveProvider = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState(0);

  return (
    <ActiveContext.Provider value={active}>
      <SetActiveContext.Provider value={setActive}>
        {children}
      </SetActiveContext.Provider>
    </ActiveContext.Provider>
  );
};

export default ActiveProvider;
