var Anagram = function(baseWord) {
  this.baseWord = baseWord;
};

Anagram.prototype.matches = function(words) {
  var baseWord = this.baseWord;
  if (!Array.isArray(words)) {
    words = Array.prototype.slice.call(arguments);
  }
  return words.filter(word => isMatch(word));

  function isMatch(newWord) {
    return !isSameWord(newWord) && sortLetters(baseWord) === sortLetters(newWord);
  }

  function sortLetters(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  function isSameWord(newWord) {
    return baseWord.toLowerCase() === newWord.toLowerCase();
  }
};

module.exports = Anagram;