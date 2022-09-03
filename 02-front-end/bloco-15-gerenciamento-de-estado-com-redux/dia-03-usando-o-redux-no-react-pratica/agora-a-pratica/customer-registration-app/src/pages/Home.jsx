import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
    <>
    <h1>Bem vindo!</h1>
    <p>Por favor, faça <Link to="/login">login</Link> para continuar</p>
    </>
    );
}

export default Home;
