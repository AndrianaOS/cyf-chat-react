import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import FormInput from "./FormInput";
import ShowAllMessages from "./ShowAllMessages";
import Footer from "./Footer";

function App() {
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);

  function fetchAllMessages() {
    fetch("http://localhost:3001/messages")
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchAllMessages();
  }, []);

  return (
    <div className="App">
      <Header />
      <FormInput fetchAllMessages={fetchAllMessages} />
      <button onClick={() => setShowMessages(true)}>Show all messages</button>
      {showMessages && <ShowAllMessages messages={messages} />}
      <Footer />
    </div>
  );
}

export default App;
