var Words = function() {
  this.count = function(phrase) {
    var words = {};
    phrase.trim().split(/\s+/).forEach((word) => {
      words.hasOwnProperty(word) ? words[word] += 1 : words[word] = 1;
    });
    return words;
  }
};

module.exports = Words;
