import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function CustomersList(props) {
    const history = useHistory();
    const { customerList } = props;
    return (
        <>
            <h1>Lista de Clientes</h1>
            {customerList.length > 0 ? (
                customerList.map(({ customerName, age, email }) =>
                    <div>
                        <p>Nome: {customerName}</p>
                        <p>Idade: {age}</p>
                        <p>E-mail: {email}</p>
                        <p>----------</p>
                    </div>
                )
            ) : (
                <p>Nenhum cliente cadastrado</p>
            )}
            <button type="button" onClick={() => history.push("/register")}>Cadastrar cliente</button>
        </>
    );
}

const mapStateToProps = (state) => ({
    ...state.registerReducer,
});

export default connect(mapStateToProps, null)(CustomersList);
