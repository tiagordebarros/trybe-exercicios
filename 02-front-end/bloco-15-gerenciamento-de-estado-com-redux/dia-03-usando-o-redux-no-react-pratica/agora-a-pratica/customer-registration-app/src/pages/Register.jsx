import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerCustomer } from "../Redux/actions/actions";

function Register(props) {
    const [customerName, setCustomerName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const history = useHistory();

    const submitNewClient = () => {
        props.dispatchRegister({ customerName, age, email });
        setCustomerName('');
        setAge(0);
        setEmail('');
    }
    return (
        <>
            <h1>Cadastrar novo cliente</h1>
            <label htmlFor="customerName">Nome
                <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    value={customerName}
                    autoFocus={true}
                    onChange={({ target: { value } }) => setCustomerName(value)}
                    required
                />
            </label>
            <label htmlFor="age">Idade
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={age}
                    onChange={({ target: { value } }) => setAge(value)}
                    required
                />
            </label>
            <label htmlFor="email">E-mail
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                    required
                />
            </label>
            <button type="button" onClick={submitNewClient}>Cadastrar</button>
            <button type="button" onClick={ () => history.push("/customers") }>Clientes</button>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchRegister: (payload) => dispatch(registerCustomer(payload)),
});

export default connect(null, mapDispatchToProps)(Register);
