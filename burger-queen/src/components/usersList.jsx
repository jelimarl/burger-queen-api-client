import React, { useEffect, useState } from "react"
import { getUsers } from "../utils/petitions"
import { UserCard } from "./userCard"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddUserForm } from "./addUserForm";
import "../styles/productsList.css"
import { EditUserForm } from "./editUserForm";

function UsersList() {

  const [list, setList] = useState([])

  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [updateList, setUpdateList] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataEditModal, setDataEditModal] = useState({})

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
                handleShow={handleShow}
                setDataEditModal={setDataEditModal}
              />
            </div>

          ))
        }
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            dataEditModal={dataEditModal}
            setDataEditModal={setDataEditModal}
            handleClose={handleClose}
            setUpdateList={setUpdateList}
            updateList={updateList}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export { UsersList }