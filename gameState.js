export const gameStateOps = (function gameStateManager() {
  let gameState;
  function startGame() {
    gameState = "InProgress";
  }

  function endGame() {
    gameState = "Over";
  }

  function getState() {
    return gameState;
  }

  return {
    endGame: endGame,
    getState: getState,
    startGame: startGame,
  };
})();
