const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Simple falling ball for “game”
let ball = { x: canvas.width / 2, y: 0, r: 20, vy: 3, caught: false };
let score = 0;

function resetBall() {
  ball.x = Math.random() * canvas.width;
  ball.y = 0;
  ball.vy = 3 + Math.random() * 3;
  ball.caught = false;
}

function drawGame(landmarks) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw falling ball
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();

  // Update ball
  ball.y += ball.vy;
  if (ball.y - ball.r > canvas.height) resetBall();

  // Draw & use hand landmarks (only first hand)
  if (landmarks && landmarks.length > 0) {
    const hand = landmarks[0];

    // Draw all landmarks
    ctx.fillStyle = "lime";
    hand.forEach(p => {
      const x = (1-p.x) * canvas.width;
      const y = p.y * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Use index finger tip (id 8) to catch ball
    const tip = hand[8];
    const tipX = (1-tip.x) * canvas.width;
    const tipY = tip.y * canvas.height;

    const dx = tipX - ball.x;
    const dy = tipY - ball.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (!ball.caught && dist < ball.r + 10) {
      ball.caught = true;
      score += 1;
      resetBall();
    }

    // Draw score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 20, 30);
  }
}

// MediaPipe Hands setup
const hands = new Hands({
  locateFile: file =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 0,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
});

hands.onResults(results => {
  drawGame(results.multiHandLandmarks || []);
});

// Use MediaPipe Camera helper
const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480,
});
camera.start();
