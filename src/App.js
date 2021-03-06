import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Routes from "./components/routes";

const App = () => {
  return (
    <div className="containerall">
    <Router>
      <Header />
      <Routes />
    </Router>
    </div>
  );
};

export default connect()(App);
