const EventHandler = () => {
  const eventHandler = (event) => {
    event.stopPropagation();
    console.log("event", event);
  };

  return (
    <div>
      <h2>EventHandler</h2>
      <div onClick={eventHandler}>
        Event Handler &nbsp;
        <span>Clicca me</span>
      </div>
    </div>
  );
};

export default EventHandler;
