images
  .createImage(
    `
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    . . # . .
    `
  )
  .showImage(0);
basic.forever(function() {
  while (true) {
    basic.pause(500);
    led.plot(2, 0);
    basic.pause(500);
    led.unplot(2, 0);
  }
});
