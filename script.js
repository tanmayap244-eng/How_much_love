const game = document.getElementById("game");
const ship = document.getElementById("spaceship");

let shipWidth = ship.offsetWidth;
let shipX = window.innerWidth / 2 - shipWidth / 2;
ship.style.left = shipX + "px";

let speed = 8;
let speedMultiplier = 1;
let score = 0;

const hearts = ["❤️", "💖", "💗", "💘", "💝", "💞", "💟", "💕"];

// --- Ship movement ---
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && shipX > 0) shipX -= speed;
  if (e.key === "ArrowRight" && shipX < window.innerWidth - shipWidth)
    shipX += speed;
  ship.style.left = shipX + "px";
});

game.addEventListener("touchmove", (e) => {
  shipX = e.touches[0].clientX - shipWidth / 2;
  if (shipX < 0) shipX = 0;
  if (shipX > window.innerWidth - shipWidth)
    shipX = window.innerWidth - shipWidth;
  ship.style.left = shipX + "px";
});

// --- Create asteroid (heart) ---
function createAsteroid() {
  const asteroid = document.createElement("div");
  asteroid.classList.add("asteroid");
  asteroid.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  game.appendChild(asteroid);

  asteroid.style.left = Math.random() * (window.innerWidth - 50) + "px";

  let asteroidY = -50;
  let fallSpeed = (8 + Math.random() * 5) * speedMultiplier;

  const fall = setInterval(() => {
    asteroidY += fallSpeed;
    asteroid.style.top = asteroidY + "px";

    // collision detection
    const shipRect = ship.getBoundingClientRect();
    const astRect = asteroid.getBoundingClientRect();

    if (
      shipRect.left < astRect.right &&
      shipRect.right > astRect.left &&
      shipRect.top < astRect.bottom &&
      shipRect.bottom > astRect.top
    ) {
      localStorage.setItem("finalScore", score);
      window.location.href = "gameover.html";
    }

    // remove if off screen
    if (asteroidY > window.innerHeight) {
      asteroid.remove();
      clearInterval(fall);
      score++;
    }
  }, 20);
}

// --- Repeat asteroid creation ---
setInterval(createAsteroid, 700);

// --- Increase difficulty ---
setInterval(() => {
  speedMultiplier += 0.1;
}, 5000);