function ShowAllMessages(props) {
  return (
    <div>
      <button onClick={props.fetchAllMessages}>Show all messages</button>
      <aside>
        {props.messages.length > 0 &&
          props.messages.map((eachMessage) => (
            <section key={eachMessage.id} className="message-thread">
              <p>Message from: {eachMessage.from}</p>
              <p>Message reads: {eachMessage.text}</p>
            </section>
          ))}
      </aside>
    </div>
  );
}

export default ShowAllMessages;
