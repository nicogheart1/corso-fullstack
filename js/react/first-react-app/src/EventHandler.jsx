const EventHandler = () => {
  const eventHandler = (event) => {
    event.stopPropagation();
    console.log("event", event);
  };

  return (
    <div onClick={eventHandler}>
      Event Handler
      <span>Clicca me</span>
    </div>
  );
};

export default EventHandler;
