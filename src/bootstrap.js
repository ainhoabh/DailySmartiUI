import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import thunk from 'redux-thunk';

import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware(thunk)(compose(window.devToolsExtension ? window.devTools.extension() : f => f)(createStore));
// modified the lesson code (above) with the following code to make Redux DevTools work:

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

import "./style/main.scss";

import Home from './components/home';
import Results from './components/results';

function main() {
  ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    // modified the lesson code (above) with the line below to make Redux DevTools work:
    <Provider store={store}>
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
