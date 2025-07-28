import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home";
import CreateNote from "./components/create/CreateNote";
import EditNote from "./components/edit/EditNote";


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
