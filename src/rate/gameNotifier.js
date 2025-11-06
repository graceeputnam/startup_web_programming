const GameEvent = {
  System: 'system',
  End: 'gameEnd',
  Start: 'gameStart',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];
  constructor() {
    // Simulates ongoing community ratings (every 5s)
    setInterval(() => {
      const score = Math.floor(Math.random() * 5) + 1;
      const date = new Date().toLocaleString();
      const userName = ['Eich', 'Tim', 'Ada', 'Chloe', 'Jim'][Math.floor(Math.random() * 5)];
      this.broadcastEvent(userName, GameEvent.End, { name: 'Random Show', score, date });
    }, 5000);
  }
  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }
  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }
  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach(handler => handler(event));
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
