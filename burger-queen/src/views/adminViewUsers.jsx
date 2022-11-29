import React from "react";
import { Header } from "../components/header"
import { UsersList } from "../components/usersList"

function AdminViewUsers() {

  return (
    <div>
      <Header />

      <div className="adminView">
        <UsersList />

      </div>
    </div>
  );
}

export { AdminViewUsers }