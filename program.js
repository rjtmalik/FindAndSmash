import { boxOps } from "./boxOperations.js";
import { playerOps } from "./player.js";
import { gameStateOps } from "./gameState.js";

window.requestAnimationFrame(gameController);

let startTime = performance.now();
gameStateOps.startGame();
boxOps.generateBox();
boxOps.registerReachedEndEvent(gameStateOps.endGame);

function gameController(timer) {
  if (gameStateOps.getState() == "Over") return;
  let elapsed = timer - startTime;
  if (elapsed > 100) {
    startTime = timer;
    boxOps.moveBoxForward();
  }
  window.requestAnimationFrame(gameController);
}

let canvas = document.querySelector("#myCanvas");

canvas.addEventListener("click", function userSmashesABox(event) {
  let playerSmashedBox = boxOps.isBoxHit({ X: event.pageX, Y: event.pageY });
  if (playerSmashedBox) {
    playerOps.increaseScore();
  } else {
    playerOps.setFailedAttempt();
  }
  let stats = playerOps.getStats();
  if (stats.misses > 9) {
    canvas.removeEventListener("click", userSmashesABox);
    gameStateOps.endGame();
    console.log("game over");
  }
});
