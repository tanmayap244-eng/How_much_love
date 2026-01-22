const game = document.getElementById("game");
const ship = document.getElementById("spaceship");

let shipX = window.innerWidth / 2 - 25;
let speed = 8;
let speedMultiplier = 1;
let score = 0;

// Move spaceship
// PC controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && shipX > 0) shipX -= speed;
  if (e.key === "ArrowRight" && shipX < window.innerWidth - 50) shipX += speed;
  ship.style.left = shipX + "px";
});

// Mobile touch controls
game.addEventListener("touchmove", (e) => {
  shipX = e.touches[0].clientX - 25;
  ship.style.left = shipX + "px";
});


const hearts = ["❤️", "💖", "💗", "💘", "💝", "💕", "💓"];
// Create asteroids
function createAsteroid() {
  const asteroid = document.createElement("div");
  asteroid.classList.add("asteroid");
  asteroid.innerText =
  hearts[Math.floor(Math.random() * hearts.length)];
asteroid.style.fontSize = "42px";

game.appendChild(asteroid);

const w = asteroid.offsetWidth;
asteroid.style.left =
  Math.random() * (window.innerWidth - w) + "px";
  
  let asteroidY = -60;
  let fallSpeed = (8 + Math.random() * 5) * speedMultiplier;
  const fall = setInterval(() => {
    asteroidY += fallSpeed;
    asteroid.style.top = asteroidY + "px";

    // Collision detection
    const shipRect = ship.getBoundingClientRect();
    const astRect = asteroid.getBoundingClientRect();

    if (
      shipRect.left < astRect.right &&
      shipRect.right > astRect.left &&
      shipRect.top < astRect.bottom &&
      shipRect.bottom > astRect.top
    ) {
      localStorage.setItem("finalScore", score);
window.location.href = "gameover.html";    }

    // Remove asteroid if off screen
    if (asteroidY > window.innerHeight) {
  asteroid.remove();
  clearInterval(fall);
  score++; // ❤️ score increases
}
  }, 20);
}

// Generate asteroids repeatedly
setInterval(createAsteroid, 700);

setInterval(() => {
  speedMultiplier += 0.1; // increase difficulty slowly
}, 5000); // every 5 seconds

