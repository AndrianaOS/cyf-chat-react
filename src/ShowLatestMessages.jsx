function ShowLatestMessages(props) {
  return (
    <div>
      {props.latestMessages.length > 0 &&
        props.latestMessages.map((eachMessage) => (
          <section key={eachMessage.id}>
            <span>{eachMessage.timeSent} </span>
            <span>{eachMessage.from} says: </span>
            <span>{eachMessage.text}</span>
          </section>
        ))}
    </div>
  );
}

export default ShowLatestMessages;
