import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="user-list__container">
          {listOfUsers.map(user => (
          <li key={user.id} className="user">
            <p className="name">Name: {user.name}</p>
            <p className="email">Email: {user.email}</p>
            <p className="phone">Phone: {user.phone}</p>
          </li>
        ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
