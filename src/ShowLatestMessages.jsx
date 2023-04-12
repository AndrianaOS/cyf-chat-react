function ShowLatestMessages(props) {
  return (
    <div>
      {props.latestMessages.length > 0 &&
        props.latestMessages.map((eachMessage) => (
          <section key={eachMessage.id} className="message-history">
            <div className="message-info">
              <span>{eachMessage.from} says: </span>
              <span>{eachMessage.text}</span>
              <p> {eachMessage.timeSent} </p>
            </div>
          </section>
        ))}
    </div>
  );
}

export default ShowLatestMessages;
