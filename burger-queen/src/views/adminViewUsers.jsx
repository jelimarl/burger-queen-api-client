import { Header } from "../components/header"
import React, { useEffect, useState } from "react"
import { getUsers } from "../utils/petitions"
import { UserCard } from "../components/userCard"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddUserForm } from "../components/addUserForm";
import "../styles/adminView.css"
import { EditUserForm } from "../components/editUserForm";

function AdminViewUsers() {

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

    <div>
      <Header />

      <div className="productsList">

        <Button variant="outline-secondary" onClick={handleShowAdd}>
          <strong>Agregar Usuario</strong>
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

        <div className="grid-container">
          {
            list.map((user, index) => (

              <UserCard
                user={user}
                key={index}
                setUpdateList={setUpdateList}
                updateList={updateList}
                handleShow={handleShow}
                setDataEditModal={setDataEditModal}
              />
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
    </div>

  )
}

export { AdminViewUsers }