import React, {Component} from "react";
import './App.css';
import Layout from './components/Layout';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import evokeAdminSite from "./reducers";
import {auth} from "./actions";

import { Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import Login from "./pages/Login";
import Approve from "./pages/Approve";
import RewardsConfig from "./pages/RewardsConfig";

let store = createStore(evokeAdminSite, applyMiddleware(thunk));

class RootContainerComponent extends Component {

    componentDidMount(){ //Se ejecuta una vez el componente ha sido insertado en el árbol de componentes
        this.props.loadUser();
    }

  render(){

      const PrivateRoute = ({component: Component, ...rest}) => (
          <Route {...rest} render={props => (
              this.props.auth.isAuthenticated ? (
                  <Component {...props}>
                      {props.children}
                  </Component>
              ) : (
                  ''
              )
          )}/>
      );

      return (
          <Layout>
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={Login}/>
                      <Route exact path="/login" component={Login} />
                      <PrivateRoute exact path="/approve" component={Approve} />
                      <PrivateRoute exact path="/rewards" component={RewardsConfig} />
                  </Switch>
              </BrowserRouter>
          </Layout >
      );
  }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: state.isAuthenticated
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser()); //Mapea las acciones a propiedades
        }
    }
};

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        )
    }
}
