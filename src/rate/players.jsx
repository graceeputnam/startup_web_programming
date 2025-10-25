import React from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';
import './players.css';

export function Players({ userName }) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    function handleGameEvent(event) {
      setEvents((prevEvents) => {
        let newEvents = [event, ...prevEvents];
        if (newEvents.length > 10) {
          newEvents = newEvents.slice(0, 10);
        }
        return newEvents;
      });
    }
    GameNotifier.addHandler(handleGameEvent);
    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  function formatMessage(event) {
    let message = '';
    if (event.type === GameEvent.End) {
      message = `rated <b>"${event.value.name}"</b> ★${event.value.score}`;
    } else if (event.type === GameEvent.Start) {
      message = `started a new rating session`;
    } else if (event.type === GameEvent.System) {
      message = event.value.msg;
    }
    return (
<div className="event" key={event.from + event.value.score + event.value.date}>
        <span className="player-event">{event.from}</span> <span dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    );
  }

  return (
    <div className="players-feed">
      <div className="player-header">
        Community Activity
      </div>
      <div id="player-messages">
        {events.map(formatMessage)}
      </div>
    </div>
  );
}
