let femmer: Image = null;
let fire: Image = null;
let sekser: Image = null;
let treer: Image = null;
let tal = 0;
let toer: Image = null;
let snyd = 0;
let ener: Image = null;
input.onButtonPressed(Button.B, function() {
  snyd = 1;
});
input.onGesture(Gesture.Shake, function() {
  if (snyd == 0) {
    tal = Math.randomRange(1, 6);
    if (tal == 1) {
      ener.showImage(0);
    } else if (tal == 2) {
      toer.showImage(0);
    } else if (tal == 3) {
      treer.showImage(0);
    } else if (tal == 4) {
      fire.showImage(0);
    } else if (tal == 5) {
      femmer.showImage(0);
    } else if (tal == 6) {
      sekser.showImage(0);
    }
  } else {
    sekser.showImage(0);
  }
  snyd = 0;
});
ener = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `);
toer = images.createImage(`
    . . . . .
    . . . # .
    . . . . .
    . # . . .
    . . . . .
    `);
treer = images.createImage(`
    . . . . .
    . . . # .
    . . # . .
    . # . . .
    . . . . .
    `);
fire = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `);
femmer = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `);
sekser = images.createImage(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `);
