document.body.onkeydown = function(e) {
  console.log(e.keyCode);
  var keys = {
      32: "drop",
      37: 'left',
      39: 'right',
      40: 'down',
      38: 'rotate'
  };
  if (typeof keys[e.keyCode] != 'undefined') {
    keyPress(keys[e.keyCode]);
    render();
  }
};
