import React from "react";
import "./App.css";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./Main";

function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
