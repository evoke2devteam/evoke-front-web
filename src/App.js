import React, {Component} from "react";
import './App.css';
import Layout from './components/Layout';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import evokeAdminSite from "./reducers";

import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from "./pages/Login";
import Approve from "./pages/Approve";

let store = createStore(evokeAdminSite, applyMiddleware(thunk));

class RootContainerComponent extends Component {
  render(){
      return (
          <Layout>
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/approve" component={Approve} />
                  </Switch>
              </BrowserRouter>
          </Layout >
      );
  }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {}
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
