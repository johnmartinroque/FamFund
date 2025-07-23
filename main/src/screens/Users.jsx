import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Users() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const fetchUsers = async () => {
    try {
      const data = getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}, {user.email}, {user.uid}
          </li>
        ))}
      </>
    </div>
  );
}

export default Users;
