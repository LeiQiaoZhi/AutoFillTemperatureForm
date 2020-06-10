import React from "react";
import "./App.css";
import InputFields from "./InputFields";

function App() {
  const navbarStyle = { color: "red" };

  return (
    <main className="container">
      <nav className="navbar navbar-light bg-light m-2" style={navbarStyle}>
        <span className="navbar-brand mb-0 h1">test</span>
      </nav>
      <InputFields />
    </main>
  );
}

export default App;
