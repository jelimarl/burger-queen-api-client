import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { postUserPetition } from "../utils/petitions";
import '../styles/loginView.css'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"

function LoginView() {

    const navigating = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null)

    const [userEmail, setUserEmail] = useState('')

    const [userPassword, setUserPassword] = useState('')

    function handleChangeEmail(event) {
        setUserEmail(event.target.value)
    }

    function handleChangePassword(event) {
        setUserPassword(event.target.value)
    }

    function handleSubmit(event) {

        event.preventDefault()

        postUserPetition(userEmail, userPassword)
            .then((response) => {
                window.sessionStorage.setItem("accessToken", response.data.accessToken);
                window.sessionStorage.setItem("userID", response.data.user.id)
                console.log(response)
                setErrorMessage(null)

                if (response.data.user.role === 'admin') {
                    navigating('/admin-products');
                }
                else if (response.data.user.role === 'mesero' || response.data.user.role === 'mesera') {
                    navigating('/waiter')
                }
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data === 'Incorrect password') {
                    setErrorMessage('Contraseña incorrecta')
                }
                else {
                    setErrorMessage('Usuario no encontrado')
                }
            })
    }

    return (
        <section className="loginComponent">

            <section className="imgSection">
                <img src="/burgerQueenThin.jpg" className="logoMobile" alt="Burger logo" />
                <img src="/burgerQueenBig.jpg" className="logoDesk" alt="Burger logo" />
            </section>
            <section className="formBox">
                <Form className='loginForm' onSubmit={handleSubmit}>
                    <Form.Group className="title">
                        <h2>
                            Inicia Sesión
                        </h2>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            className='emailInput'
                            type='email'
                            placeholder="Introduce Email"
                            name="email"
                            required
                            value={userEmail}
                            onChange={handleChangeEmail}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='password'
                            placeholder="Introduce Contraseña"
                            name="password"
                            required
                            value={userPassword}
                            onChange={handleChangePassword}
                        />
                    </Form.Group>
                    <Form.Group>
                        {errorMessage ? (<p id="errorMessage">{errorMessage}</p>) : (null)}
                    </Form.Group>
                    <div className="d-grid login">
                        <Button type="submit" className="loginBtn">
                            Ingresar
                        </Button>
                    </div>
                </Form>
            </section>
        </section>
    )
}

export { LoginView }