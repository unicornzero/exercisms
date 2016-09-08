function toRoman(num) {
  var repeat = function(letter, quantity) {
    var string = ''
    for (var i = 1; i <= quantity; i++) {
      string += letter;
    }
    return string;
  }

  var convertNum = function(num) {
    var numerals = [
      [1000, 'M'],
      [500, 'D'],
      [100, 'C'],
      [50, 'L'],
      [10, 'X'],
      [5, 'V'],
      [1, 'I']
    ];
    var translated = '';
    var remainder = num;
    for (var i in numerals) {
      var curNum = numerals[i][0];
      var curLetter = numerals[i][1];
      if (remainder >= curNum) {
        translated += repeat(curLetter, remainder / curNum);
        remainder -= curNum * Math.floor(remainder / curNum);
      }
      var subtractables = [
        [100, 'C'],
        [10, 'X'],
        [1, 'I']
      ];
      for (var i in subtractables) {
        var subNumber = subtractables[i][0];
        var subLetter = subtractables[i][1];
        if (remainder >= subNumber && remainder >= curNum - subNumber) {
          translated += subLetter + curLetter;
          remainder -= (curNum - subNumber);
        }
      }
    }
    return translated;
  }
  return convertNum(num);
};

module.exports = toRoman;
