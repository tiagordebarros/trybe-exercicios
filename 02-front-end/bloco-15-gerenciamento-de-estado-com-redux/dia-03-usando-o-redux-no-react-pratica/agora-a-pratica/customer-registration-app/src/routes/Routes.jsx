import React from "react";
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomersList from "../pages/CustomersList";

function Routes(props) {
    const { status } = props;
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/customers" component={CustomersList}>
                    { !status && <p>Login não efetuado</p> }
                </Route>
            </Switch>
        </main>
    );
}

const mapStateToProps = (state) => ({
    ...state.loginReducer,
});

export default connect(mapStateToProps, null)(Routes);
