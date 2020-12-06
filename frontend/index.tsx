import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

interface Props {}

const Index = (props: Props) => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
