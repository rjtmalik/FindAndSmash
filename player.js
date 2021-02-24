export const playerOps = (function playerOps() {
  let score = 0;
  let misses = 0;

  function getStats() {
    return {
      score: score,
      misses: misses,
    };
  }

  function increaseScore() {
    score += 1;
  }

  function setFailedAttempt() {
    misses += 1;
  }

  return {
    getStats: getStats,
    increaseScore: increaseScore,
    setFailedAttempt: setFailedAttempt,
  };
})();
