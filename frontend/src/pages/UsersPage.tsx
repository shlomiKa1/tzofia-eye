import { useEffect, useState } from "react";
import { api } from "../api/client";
import type { User } from "../types/user";

const UsersPage = () => {
  const [users, setrUsers] = useState<Omit<User, "password">[]>([]);
  useEffect(() => {
    api
      .get("/users")
      .then((res) => res.data.data as User[])
      .then(setrUsers);
  });

  return (
    <ul>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email} - {user.role} - {user.assignedArena}
          </li>
        ))}
    </ul>
  );
};

export default UsersPage;
