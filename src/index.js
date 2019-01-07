
import React from 'react';
import ReactDOM from "react-dom";

import App from "./js/components/App";


const rootElement = document.getElementById("root");
rootElement ? ReactDOM.render(<App />, rootElement) : false;