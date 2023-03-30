import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import FormInput from "./FormInput";
import ShowAllMessages from "./ShowAllMessages";
import Footer from "./Footer";

function App() {
  const [showMessages, setShowMessages] = useState([]);

  function fetchAllMessages() {
    fetch("http://localhost:3001/messages")
      .then((response) => response.json())
      .then((data) => setShowMessages(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <FormInput fetchAllMessages={fetchAllMessages} />
      <ShowAllMessages
        fetchAllMessages={fetchAllMessages}
        messages={showMessages}
      />
      <Footer />
    </div>
  );
}

export default App;
