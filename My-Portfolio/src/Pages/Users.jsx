import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:2001/getUser");
      setUsers(res.data.data);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user._id} className="border-2 mt-5 p-10">
          <p>Firstname: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Blood Group: {user.bloodgroup}</p>
          <p>Address: {user.address}</p>
          <p>Contact: {user.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;