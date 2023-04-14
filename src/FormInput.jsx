import React, { useState } from "react";

function FormInput(props) {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    time: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://chat-server-u011.onrender.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: formData.name,
        text: formData.message,
        timeSent: formData.time,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.fetchAllMessages();
        props.refreshingList(true);
        alert("Message submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleInputChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form action="/messages" method="post" onSubmit={handleSubmit}>
      <div className="name-container">
        <label htmlFor="name floatingInput">Please enter your name</label>
        <input
          type="text"
          name="name"
          placeholder="Type name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="message">Please enter your message</label>
        <input
          type="text"
          name="message"
          placeholder="Type message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="message-container">
        <label htmlFor="message">Please enter your message</label>
        <input
          type="text"
          name="message"
          placeholder="Type message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div> */}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default FormInput;
