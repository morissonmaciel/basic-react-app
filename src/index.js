import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import registerServiceWorker from "./services/registerServiceWorker";

ReactDOM.render(
    <App />,
    document.getElementById("main-app")
);
registerServiceWorker();