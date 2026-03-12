import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

export default function RestApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <h3>{user.email}</h3>
        </div>
      ))}
    </div>
  );
}
