import React from "react";

import Header from "../layout/header";
import Summary from "../summary/summary";
import Filters from "../filters/filters";
import Expenses from "../expenses/expenses";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Summary count={3} total={432500} />
      <Filters />
      <Expenses />
    </div>
  );
};

export default Dashboard;
