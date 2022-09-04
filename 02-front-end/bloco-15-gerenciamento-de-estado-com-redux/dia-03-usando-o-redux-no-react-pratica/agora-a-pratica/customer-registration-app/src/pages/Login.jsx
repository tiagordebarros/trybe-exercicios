import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../Redux/actions/actions";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitLogin = () => {
        props.dispatchLogin({ email, password });
        history.push("/customers");
    }

    const formValidate = () => {
        const minLenght = 6;
        return (
            email.match(/\S+@\S+\.\S+/) && password.length > minLenght
        );
    }

    return (
        <form action="get">
            <input
                type="email"
                name="email"
                id="email"
                value={ email }
                onChange={ ({ target: { value }}) => setEmail(value) }
                placeholder="E-mail"
                autoFocus={ true }
                required
            />
            <input 
                type="password"
                name="password" 
                id="password"
                value={ password }
                onChange={ ({ target: {value} }) => setPassword(value) }
                placeholder="Senha"
                required
            />
            <button type="button" onClick={ submitLogin } disabled={ !formValidate() }>Entrar</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLogin: (payload) => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
