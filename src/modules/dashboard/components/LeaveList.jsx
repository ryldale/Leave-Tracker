const LeaveList = ({ filteredLeaveData }) => {
  return (
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
  );
};

export default LeaveList;
