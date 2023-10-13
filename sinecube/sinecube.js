let waveOffset = 0;
let cubeY = 0;
let cubeSpeed = 2;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Set black background
  background(0);

  // Generate and draw wave
  stroke(255);
  noFill();
  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = map(sin(waveOffset + x * 0.05), -1, 1, 200, 400);
    vertex(x, y);
  }
  endShape();

  // Update wave offset
  waveOffset += 0.05;

  // Draw cube at the middle of the screen
  fill(255, 0, 0);
  rect(width / 2 - 15, cubeY, 30, 30);

  // Bouncing logic
  let waveY = map(sin(waveOffset + (width / 2) * 0.05), -1, 1, 200, 400);
  if (abs(waveY - cubeY) < 1) {
    cubeSpeed *= -1; // reverse speed when it aligns with wave
  }
  cubeY += cubeSpeed;
}
