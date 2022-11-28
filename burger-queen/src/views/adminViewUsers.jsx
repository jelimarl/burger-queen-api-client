import React from "react";
import { Header } from "../components/header"
import { UserList } from "../components/userList"

function AdminViewUsers() {

  return (
    <div>
      <Header />

      <div className="adminView">
        <UserList />

      </div>
    </div>
  );
}

export { AdminViewUsers }