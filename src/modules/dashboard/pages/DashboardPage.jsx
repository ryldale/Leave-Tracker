import React, { useEffect, useState } from "react";
import leaveData from "../.././../leaveData";
import LeaveFilter from "../components/LeaveFilter";
// import global from "../../../Global.module.css";

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
    <div>
      <h1 className={`row`}>Dashboard</h1>
      <div>
        {/* own component */}
        <p>
          vl - {vlBalance} sl - {slBalance} el - {elBalance}
        </p>
        {/* own component */}
        <LeaveFilter handleFilterChange={handleFilterChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Ticket Number</th>
            <th>Leave Date</th>
            <th>Leave Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* own component */}
          {filteredLeaveData.map((leave, index) => (
            <tr key={index}>
              <td>{leave.ticketNumber}</td>
              <td>{leave.leaveDate}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
