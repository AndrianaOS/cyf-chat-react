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
    fetch("http://localhost:3001/messages")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMessages(data);
      })
      .catch((error) => console.log(error));
  }

  // FETCH FUNCTION FOR LATEST MESSAGES
  function fetchLatestMessages() {
    fetch("http://localhost:3001/messages/latest")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setRefresh(false);
        setLatestMessages(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchAllMessages();
    if (refresh) {
      fetchLatestMessages();
    }
  }, [refresh, setRefresh]);

  return (
    <div className="App">
      <Header />
      <FormInput
        fetchAllMessages={fetchAllMessages}
        refreshingList={refreshingList}
      />
      <button onClick={() => setShowMessages(true)}>Show all messages</button>
      {showMessages && (
        <ShowAllMessages messages={messages} refreshingList={refreshingList} />
      )}
      <button onClick={() => setShowLatestMessages(true)}>
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
