var Words = function() {};

Words.prototype.count = function(phrase) {
  return phrase.trim().split(/\s+/).reduce((words, word) => {
    words.hasOwnProperty(word) 
    ? words[word] += 1 
    : words[word] = 1;
    return words
  }, {});
};

module.exports = Words;
