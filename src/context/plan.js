import React, { useState } from 'react';

export const PlanContext = React.createContext();

function Plan(props) {
  const [plan, setPlan] = useState({});

  const state = {
    plan,
    setPlan,
  };

  return (
    <PlanContext.Provider value={state}>{props.children}</PlanContext.Provider>
  );
}

export default Plan;
