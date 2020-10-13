//costanti colore background
let c1;
let c2;

//costanti colore pattern
const colorPalette1 = ["White", "White", "White"];
const colorPalette2 = ["LightSteelBlue", "#E3F2FD", "LightSkyBlue"];
const colorPalette3 = ["White", "Navy", "LightSkyBlue"];

//costanti texture
const l1 = 200;
const l2 = l1 / 2;
const l3 = l1 / 4;

function setup() {
  createCanvas(windowWidth, windowHeight)
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(2);

  //definizione delle costanti lerp color background
  c1 = color("White");
  c2 = color("LightBlue");

}

function draw() {
  //lercolor background
  let m = map(mouseX, 0, width, 0, 1.0);
  let c = lerpColor(c1, c2, m);
  background(c);

  //texture base
  for (let x = l1; x <= width; x += l1) {
    for (let y = l1; y <= height; y += l1) {

      if (mouseX < windowWidth / 2) {
        fill(color(random(colorPalette1)));

      } else {
        fill(color(random(colorPalette2)));

      }

      //texture base
      ellipse(x, y, l1, l2);
      ellipse(x, y, l2, l1);


      //parte interna 1 statica
      fill("WHITE");
      ellipse(x, y, l2, l3);
      ellipse(x, y, l3, l2);


      //parte interna 2 dinamica
      fill(color(random(colorPalette3)));
      ellipse(x, y, l3, l2 / 4);
      ellipse(x, y, l2 / 4, l3);

    }
  }

  //testo cursore
  noStroke();
  textFont("Georgia");
  fill("Navy");
  textSize(15);
  text("move from left to right to make me BLUER", mouseX, mouseY);

  //testo
  fill("Navy");
  textSize(25);
  textAlign(CENTER, TOP)
  text("pretty flowers make me BLUE", width * 0.5, height * 0.05);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
