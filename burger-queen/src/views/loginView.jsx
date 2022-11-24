import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { postUserPetition } from "../utils/petitions";
import '../styles/loginView.css'

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
                console.log(response)
                setErrorMessage(null)

                if (response.data.user.role === 'admin') {
                    navigating('/admin-products');
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
                <form className='loginForm' onSubmit={handleSubmit}>
                    <h2 className="loginTitle">
                        Inicia Sesión
                    </h2>
                    <input
                        className="emailInput"
                        type='email'
                        placeholder="Introduce Email"
                        name="email"
                        required
                        value={userEmail}
                        onChange={handleChangeEmail}
                    />
                    <input
                        className="passwordInput"
                        type='password'
                        placeholder="Introduce Contraseña"
                        name="password"
                        required
                        value={userPassword}
                        onChange={handleChangePassword}
                    />
                    {errorMessage ? (<p id="errorMessage">{errorMessage}</p>) : (null)}

                    <button type="submit" className="loginBtn">
                        Ingresar
                    </button>
                </form>
            </section>
        </section>
    )
}

export { LoginView }