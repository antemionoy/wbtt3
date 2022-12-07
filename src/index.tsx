import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App/App";
import store from "./redux/index";
import { Provider } from "react-redux";

const app = (
    <Provider store={store}>
        <App />
    </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));
