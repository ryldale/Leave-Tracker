import React, { useEffect, useState } from "react";
import leaveData from "../.././../leaveData";
import LeaveFilter from "../components/LeaveFilter";
import LeaveList from "../components/LeaveList";
import global from "../../../Global.module.css";

const DashboardPage = () => {
  const [filter, setFilter] = useState("All");
  // make this Reducer
  const [vlBalance, setVlBalance] = useState(15);
  const [slBalance, setSlBalance] = useState(15);
  const [elBalance, setElBalance] = useState(3);

  useEffect(() => {
    const updateBalances = () => {
      let vlCount = 15;
      let slCount = 15;
      let elCount = 3;
      leaveData.forEach((leave) => {
        if (leave.leaveType === "VL") {
          vlCount--;
        } else if (leave.leaveType === "SL") {
          slCount--;
        } else if (leave.leaveType === "EL") {
          elCount--;
        }
      });
      setVlBalance(vlCount);
      setSlBalance(slCount);
      setElBalance(elCount);
    };

    updateBalances();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredLeaveData = leaveData.filter((leave) => {
    if (filter === "All") {
      return true;
    } else {
      return leave.status === filter;
    }
  });

  return (
    <div className={`${global.margin}`}>
      <h1>Dashboard</h1>
      <div>
        {/* own component */}
        <p>
          vl - {vlBalance} sl - {slBalance} el - {elBalance}
        </p>
        {/* own component */}
        <LeaveFilter handleFilterChange={handleFilterChange} />
      </div>

          {/* own component */}
          <LeaveList filteredLeaveData={filteredLeaveData}/>

    </div>
  );
};

export default DashboardPage;
