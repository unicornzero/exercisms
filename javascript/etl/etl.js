var ETL = function() {
  this.transform = function(oldScoring) {
    scores = Object.keys(oldScoring);
    this.newScoring = {};
    for (var index in scores) {
      var score = scores[index];
      var letters = oldScoring[score];
      for (var index in letters) {
        var letter = letters[index].toLowerCase();
        this.newScoring[letter] = Number(score);
      }
    }
    return this.newScoring;
  };
};

module.exports = ETL;
