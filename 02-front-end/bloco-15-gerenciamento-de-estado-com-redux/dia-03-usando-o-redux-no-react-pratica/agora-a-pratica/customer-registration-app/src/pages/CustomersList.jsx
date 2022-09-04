import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeCustomer, sortCustomerByName } from "../Redux/actions/actions";

function CustomersList(props) {
    const history = useHistory();
    const { customerList } = props;

    return (
        <>
            <h1>Lista de Clientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
            </table>
            {customerList.length > 0 ? (
                customerList.map(({ customerName, age, email }) =>
                    <table>
                        <tbody>
                            <tr id={email}>
                                <td>{customerName}</td>
                                <td>{age}</td>
                                <td>{email}</td>
                                <td><button type="button" onClick={() => props.dispatchRemove(email)}>X</button></td>
                            </tr>
                        </tbody>
                    </table>
                )
            ) : (
                <p>Nenhum cliente cadastrado</p>
            )}
            <button type="button" onClick={() => history.push("/register")}>Cadastrar cliente</button>
            <button type="button" onClick={ () => props.dispatchaSortByName() }>Ordenar por Nome</button>
        </>
    );
}

const mapStateToProps = (state) => ({
    ...state.registerReducer,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchRemove: (payload) => dispatch(removeCustomer(payload)),
    dispatchaSortByName: (payload) => dispatch(sortCustomerByName(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
