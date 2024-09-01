import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as thunk from 'redux-thunk';

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk.default)(createStore);

import "./style/main.scss";

import Home from './components/home';
import Results from './components/results';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/results' component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
