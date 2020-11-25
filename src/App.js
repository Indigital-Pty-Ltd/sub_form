import React from "react";
import Azure from "./Azure.js";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

return (

  <div className="App">
    <div className="container">
      <header className="App-header">
        <br />

        <div className="jumbotron">
          <h1 className="display-3">
            NAIDOC Submission Form
          </h1>

          <hr className="my-2" />
        </div>
      </header>

      <br></br>

      <Azure></Azure>

    </div>
  </div>

  );
}

export default App;