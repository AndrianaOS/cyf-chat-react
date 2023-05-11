import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

function ShowAllMessages(props) {
  // function handleUpdate() {
  //   alert("FEATURE COMING SOON WITH NEXT UPDATE");
  // }
  return (
    <div>
      <aside className="allMessages">
        {props.messages.length > 0 &&
          props.messages.map((eachMessage) => (
            <section key={eachMessage.id} className="message-thread">
              <div className="message">
                <span> {eachMessage.text} </span>
              </div>
              <div className="name-icon">
                <span>{eachMessage.from}</span>
                <span>{eachMessage.timeSent} </span>
                <span className="icons">
                  <FontAwesomeIcon
                    icon={faPenNib}
                    style={{ color: "#6ae561" }}
                    className="pen"
                    // onClick={props.updateMessage(eachMessage.id)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#7956ba" }}
                    onClick={() => props.deleteMessage(eachMessage.id)}
                    className="bin"
                  />
                </span>
              </div>
            </section>
          ))}
      </aside>
    </div>
  );
}

export default ShowAllMessages;
