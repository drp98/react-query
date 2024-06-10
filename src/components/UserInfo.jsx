const UserInfo = ({ label, value }) => {
  return (
    <div className="mb-2 flex justify-between">
      <label className="text-gray-600">{label}:</label>
      <div>{value}</div>
    </div>
  );
}

export default UserInfo;