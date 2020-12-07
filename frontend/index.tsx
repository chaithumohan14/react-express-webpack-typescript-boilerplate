import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./utils/context";
import { reducer } from "./utils/_reducer";

interface Props {}

const Index = (props: Props) => {
  return (
    <StateProvider
      initialState={{
        prop1: "prop1",
        prop2: "prop2",
      }}
      reducer={reducer}
    >
      <Router key="router_id">
        <App />
      </Router>
    </StateProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
