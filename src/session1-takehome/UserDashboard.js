import React, { useState } from "react";
import axios from "axios";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  const fetchUserData = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    try {
      const response = await axios.get(url);
      //console.log(response.data);
      setUser(response.data);
    } catch (error) {
      setUser(null);
      alert("Error: User not found!");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="button-group">
        {[1, 2, 3, 100].map((id) => (
          <button key={id} className="" onClick={() => fetchUserData(id)}>
            {id}
          </button>
        ))}
      </div>

      <hr />

      <div className="content-area">
        <ul className="user-card">
          <li>
            <strong>Email:</strong> {user ? user.email : "Not Available"}
          </li>
          <li>
            <strong>Name:</strong> {user ? user.name : "Not Available"}
          </li>
        </ul>

        <img
          src={
            user
              ? `https://i.pravatar.cc/150?u=${user.id}`
              : "https://via.placeholder.com/150"
          }
          alt="avatar"
          className="avatar-img"
        />
      </div>
    </div>
  );
};

export default UserDashboard;
