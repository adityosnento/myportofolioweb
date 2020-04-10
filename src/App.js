import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Body/4. Footer/Footer";
import Routes from "./components/routes";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

export default connect()(App);
