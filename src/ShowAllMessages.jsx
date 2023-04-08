import React from "react";

function ShowAllMessages(props) {
  //   console.log(props.messages);

  //   const messageID = props.messages.forEach((element) => element.id);
  //   console.log(messageID);
  //   const id = messageID.map((eachID) => eachID);
  //   console.log(id);

  //   function deleteMessage(id) {
  //     console.log(id);
  //     fetch(`http://localhost:3001/messages/${id}`, {
  //       method: "DELETE",
  //     }).then(() => {
  //       console.log("Message Deleted " + id);
  //       props.refreshingList(true);
  //     });
  //   }

  //   useEffect(() => {``
  //     deleteMessage();
  //   });

  return (
    <div>
      <aside>
        {props.messages.length > 0 &&
          props.messages.map((eachMessage) => (
            <section key={eachMessage.id} className="message-thread">
              <span>{eachMessage.timeSent} </span>
              <span>{eachMessage.from} says:</span>
              <span> {eachMessage.text} </span>
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-vector-pen"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                  //   onClick={deleteMessage}
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </span>
            </section>
          ))}
      </aside>
    </div>
  );
}

export default ShowAllMessages;
