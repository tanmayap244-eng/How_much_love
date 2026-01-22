const score = Number(localStorage.getItem("finalScore")) || 0;

const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const gifEl = document.getElementById("gif");

scoreEl.innerText = `Score: ${score}`;

if (score === 0) {
  messageEl.innerText = "No love 💔";
  gifEl.src = "https://media.tenor.com/Wcu9oaorv8kAAAAi/tramell-tillman.gif";
}
else if (score > 0 && score < 30) {
  messageEl.innerText = "Hmm ❣️";
  gifEl.src = "https://media1.tenor.com/m/NMj9xxTupJgAAAAC/ppg-the-powerpuff-girls.gif";
}
else if (score >= 30 && score < 70) {
  messageEl.innerText = "Too much love 💕";
  gifEl.src = "https://media.tenor.com/Ms4W0O6OiRMAAAAi/i-love-you-i-love-you-so-much.gif";
}
else if (score >= 70 && score < 150) {
  messageEl.innerText = "Very very much love 💖";
  gifEl.src = "https://media.tenor.com/OrxXcqX25KcAAAAi/dudu-bubu-love-gif.gif";
}
else {
  messageEl.innerText = "Aww! You love me for an infinity.....🎀❤️😍🥰";
  gifEl.src = "https://media.tenor.com/8dzBZD1j7G8AAAAi/hello-kitty-daniel.gif";
}
