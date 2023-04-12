import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import FormInput from "./FormInput";
import ShowAllMessages from "./ShowAllMessages";
import ShowLatestMessages from "./ShowLatestMessages";
import Footer from "./Footer";

function App() {
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [latestMessages, setLatestMessages] = useState(messages);
  const [showLatestMessages, setShowLatestMessages] = useState(false);
  const [refresh, setRefresh] = useState(true);

  // FUNCTION TO REFRESH MESSAGE LIST
  function refreshingList(state) {
    setRefresh(state);
  }

  // FETCH FUNCTION FOR ALL MESSAGES
  function fetchAllMessages() {
    fetch("https://chat-server-u011.onrender.com/messages")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMessages(data);
      })
      .catch((error) => console.log(error));
  }

  // FETCH FUNCTION FOR LATEST MESSAGES
  function fetchLatestMessages() {
    fetch("https://chat-server-u011.onrender.com/messages/latest")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setRefresh(false);
        setLatestMessages(data);
      })
      .catch((error) => console.log(error));
  }

  // FETCH FUNCTION FOR DELETING MESSAGES
  function deleteMessage(id) {
    fetch(`https://chat-server-u011.onrender.com/messages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        console.log("Message Deleted " + id);
        refreshingList(true);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchAllMessages();
    if (refresh) {
      fetchLatestMessages();
    }
    // deleteMessage();
  }, [refresh, setRefresh]);

  return (
    <div className="App">
      <Header />
      <FormInput
        fetchAllMessages={fetchAllMessages}
        refreshingList={refreshingList}
      />
      <button onClick={() => setShowMessages(true)} className="show-btn">
        Show all messages
      </button>
      {showMessages && (
        <ShowAllMessages
          messages={messages}
          refreshingList={refreshingList}
          deleteMessage={deleteMessage}
        />
      )}
      <button onClick={() => setShowLatestMessages(true)} className="show-btn">
        Show latest messages
      </button>
      {showLatestMessages && (
        <ShowLatestMessages
          latestMessages={latestMessages}
          refreshingList={refreshingList}
          refresh={refresh}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
