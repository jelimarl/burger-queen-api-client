import React, { useEffect, useState } from "react"
import { getUsers } from "../utils/petitions"
import { UserCard } from "./userCard"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddUserForm } from "./addUserForm";
import "../styles/productsList.css"

function UsersList() {

  const [list, setList] = useState([])

  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [updateList, setUpdateList] = useState(false)

  useEffect(() => {

    getUsers()
      .then((response) => {
        // console.log(response)
        setList(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [updateList])

  return (
    <div className="productsList">

      <Button variant="secondary" onClick={handleShowAdd}>
        Agregar Usuario
      </Button>

      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUserForm
            handleCloseAdd={handleCloseAdd}
            setUpdateList={setUpdateList}
            updateList={updateList}
          />
        </Modal.Body>
      </Modal>

      <div>
        {
          list.map((user, index) => (

            <div className="productCard" key={index}>
              <UserCard
                user={user}
                setUpdateList={setUpdateList}
                updateList={updateList}
              />
            </div>

          ))
        }
      </div>
    </div>
  )
}

export { UsersList }