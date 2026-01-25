import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import UnderDevelopment from "./pages/under-development";
UnderDevelopment;
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/under-development"
            element={<UnderDevelopment />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
