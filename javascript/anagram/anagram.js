var Anagram = function(baseWord) {
  this.baseWord = baseWord;

  this.matches = function(words) {
    var words = Array.isArray(words) ? words : Array.prototype.slice.call(arguments);
    var matches = [];
    for (index in words) {
      _match(words[index]) ? matches.push(words[index]) : null;
    }
    return matches;

    function _match(newWord) {
      if (baseWord.toLowerCase() === newWord.toLowerCase()) {
        return false;
      } else {
        return _sortLetters(baseWord) === _sortLetters(newWord);
      }
    };

    function _sortLetters(word) {
      return word.toLowerCase().split('').sort().join('');
    };
  };
};

module.exports = Anagram;