import React, { useState } from 'react';
import { macroCycle } from '../algorithms/generator2';

export const PlanContext = React.createContext();

function Plan(props) {
  const [plan, setPlan] = useState({});

  function setPlanWithORMS(orms) {
    const output = macroCycle(orms);
    setPlan(output);
  }

  const state = {
    plan,
    setPlanWithORMS,
  };

  return (
    <PlanContext.Provider value={state}>{props.children}</PlanContext.Provider>
  );
}

export default Plan;
