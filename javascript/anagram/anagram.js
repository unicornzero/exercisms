var Anagram = function(baseWord) {
  this.baseWord = baseWord;
};

Anagram.prototype.matches = function(words) {
  var sortLetters = (string) => {
    return string.toLowerCase().split('').sort().join('');
  };

  if (!Array.isArray(words)) {
    words = Array.prototype.slice.call(arguments);
  }
  return words.filter(word => 
    this.baseWord.toLowerCase() !== word.toLowerCase() 
    && sortLetters(this.baseWord) === sortLetters(word));
};

module.exports = Anagram;