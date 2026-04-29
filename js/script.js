function setup() {
  const container = document.getElementById('sketch');
  const canvas = createCanvas(windowWidth, windowHeight * .6);
  canvas.parent(container);
}

function draw() {
  clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
