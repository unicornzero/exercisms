var ETL = function() {};

ETL.prototype.transform = function(oldScoring) {
  scores = Object.keys(oldScoring);
  this.newScoring = {};
  for (var p = 0; p < scores.length; p++) {
    var score = scores[p];
    var letters = oldScoring[score];
    for (var l = 0; l < letters.length; l++) {
      var letter = letters[l].toLowerCase();
      this.newScoring[letter] = Number(score);
    }
  }
  return this.newScoring;
};

module.exports = ETL;
