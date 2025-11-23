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
  sendQueue = [];  // Queue for messages if socket isn't open yet

  constructor() {
    // Change to your back-end port (4000 if that's what you're running)
    const port = 4000;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}`);

    this.socket.onopen = (event) => {
      this.receiveEvent(new EventMessage('Simon', GameEvent.System, { msg: 'connected' }));
      // Flush queued messages
      this.sendQueue.forEach(data => this.socket.send(data));
      this.sendQueue = [];
    };

    this.socket.onclose = (event) => {
      this.receiveEvent(new EventMessage('Simon', GameEvent.System, { msg: 'disconnected' }));
    };

    this.socket.onmessage = async (msg) => {
  try {
    let data;
    if (typeof msg.data === 'string') {
      data = msg.data;
    } else if (msg.data instanceof Blob) {
      data = await msg.data.text();
    } else {
      throw new Error("Unknown WebSocket data type");
    }
    const event = JSON.parse(data);
    this.receiveEvent(event);
  } catch (e) {
    console.warn("Failed to parse incoming WebSocket message.", msg.data, e);
  }
};


  }

  broadcastEvent(from, type, value) {
    const data = JSON.stringify(new EventMessage(from, type, value));
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      this.sendQueue.push(data);
      console.warn("WebSocket not ready, event queued:", this.socket.readyState);
    }
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach(handler => {
      handler(event);
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
