setInterval(() => {
  const show = "The Office";
  const score = Math.floor(Math.random() * 5);
  const date = new Date().toLocaleDateString();
  const userName = 'Eich';
  this.broadcastEvent(userName, GameEvent.End, { name: userName, score: score, date: date });
}, 5000);