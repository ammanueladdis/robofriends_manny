import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

// tachyons is the useful CSS classname tool for shortform stuff
import "tachyons";

// redux imports - pay attention
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from "./reducers";

// const logger = createLogger();

//TODO: Take note of this son - reducer imports are cool
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, 
  applyMiddleware(
    thunkMiddleware, 
//  logger
  )
); 

ReactDOM.render(<Provider store={store}>
                  <App />  
                </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
