import React, { useState } from "react";
import ReactDOM from "react-dom";

import './App.css';

function App() {
  
  const [state, setState] = useState(false);

  const showModal = () => {
    setState(true);
  };

  const hideModal = () => {
    setState(false);
  };
    return (
      <main>
        <h1> User Dashboard</h1>
        <button type="button" onClick={() => showModal()}>
          Login
        </button>
        
      </main>
    );
}

const container = document.createElement("div");
document.body.appendChild(container);
//ReactDOM.render(<App />, container);






export default App;
