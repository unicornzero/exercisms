var Pangram = function (phrase) {
  this.phrase = phrase;

  this.isPangram = function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var index in phrase) {
      var letter = this.phrase[index].toLowerCase();
      alphabet = alphabet.replace(letter, '');
    };
    return alphabet.length === 0;
  };

};

module.exports = Pangram;
