import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./index.scss"
import App from "./src/components/App"
// import {Provider} from "react-redux"
import {Provider} from "./fake-react-redux"
import store from "./store/store.js"
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById("root")
);
