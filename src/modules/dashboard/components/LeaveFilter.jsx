const LeaveFilter = ({ handleFilterChange }) => {
  return (
    <div>
      <button onClick={() => handleFilterChange("All")}>All</button>
      <button onClick={() => handleFilterChange("Pending")}>Pending</button>
      <button onClick={() => handleFilterChange("Approved")}>Approved</button>
      <button onClick={() => handleFilterChange("Reject")}>Reject</button>
    </div>
  );
};

export default LeaveFilter;
