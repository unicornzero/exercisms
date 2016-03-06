var Anagram = function(baseWord) {

  this.matches = function(words) {
    var words = Array.isArray(words) ? words : Array.prototype.slice.call(arguments);
    return words.filter((word) => { return _match(word);  });

    function _match(newWord) {
      return !_sameWord(newWord) && _sortLetters(baseWord) === _sortLetters(newWord);
    };

    function _sortLetters(word) {
      return word.toLowerCase().split('').sort().join('');
    };

    function _sameWord(newWord) {
      return baseWord.toLowerCase() === newWord.toLowerCase();
    };
  };
};

module.exports = Anagram;