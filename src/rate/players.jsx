const [events, setEvent] = React.useState([]);

React.useEffect(() => {
  GameNotifier.addHandler(handleGameEvent);

  return () => {
    GameNotifier.removeHandler(handleGameEvent);
  };
});

function handleGameEvent(event) {
  let newEvents = [event, ...events];
  if (newEvents.length > 10) {
    newEvents = newEvents.slice(1, 10);
  }
  setEvent(newEvents);
}