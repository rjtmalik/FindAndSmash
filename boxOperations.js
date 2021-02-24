export const boxOps = (function boxOperations() {
  let currentBox = {
    color: "#05EFFF",
    width: 10,
    height: 10,
    top: 0,
    left: 0,
  };

  var canvas = document.querySelector("#myCanvas");

  function moveBoxForward() {
    let canvasContext = canvas.getContext("2d");
    canvasContext.clearRect(
      currentBox.left,
      currentBox.top,
      currentBox.width,
      currentBox.height
    );
    if (currentBox.top == 150) {
      const event = new Event("reachedEnd");
      canvas.dispatchEvent(event);
    } else {
      currentBox.left = currentBox.left + 10;
      if (currentBox.left == 300) {
        currentBox.left = 0;
        currentBox.top += 10;
      }
      drawBox(currentBox);
    }
  }

  function isBoxHit(dimensions) {
    let canvasLeft = canvas.offsetLeft;
    let canvasTop = canvas.offsetTop;

    let x = dimensions.X - canvasLeft;
    let y = dimensions.Y - canvasTop;
    if (
      y > currentBox.top &&
      y < currentBox.top + currentBox.height &&
      x > currentBox.left &&
      x < currentBox.left + currentBox.width
    ) {
      return true;
    }
    return false;
  }

  function generateBox() {
    drawBox(currentBox);
  }

  function drawBox(box) {
    let canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle = box.color;
    canvasContext.fillRect(box.left, box.top, box.width, box.height);
  }

  function registerReachedEndEvent(fnCallBack) {
    canvas.addEventListener("reachedEnd", fnCallBack);
  }

  return {
    moveBoxForward: moveBoxForward,
    generateBox: generateBox,
    isBoxHit: isBoxHit,
    registerReachedEndEvent: registerReachedEndEvent,
  };
})();
