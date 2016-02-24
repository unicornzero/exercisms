var Pangram = function (phrase) {
  this.phrase = phrase;

  this.isPangram = function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (i = 0; i <= this.phrase.length; i++) {
      var char = this.phrase.charAt(i).toLowerCase();
      if (alphabet.includes(char)) {
        alphabet = alphabet.replace(char, '');
      }
    };
    return alphabet.length === 0;
  };

};

module.exports = Pangram;