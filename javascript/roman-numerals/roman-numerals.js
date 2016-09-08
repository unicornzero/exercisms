function toRoman(num) {
  var repeat = function(letter, quantity) {
    var string = ''
    for (var i = 1; i <= quantity; i++) {
      string += letter;
    }
    return string;
  }
  
  var numerals = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
  ];

  var convertNum = function(num) {
    var translated = '';
    var remainder = num;
    for (var i in numerals) {
      var curSet = numerals[i]
      var curNum = curSet[0];
      var curLetter = curSet[1];
      if (remainder >= curNum) {
        var multiple = Math.floor(remainder / curNum);
        translated += repeat(curLetter, remainder/curNum);
        remainder -= curNum * multiple;
      } else if (remainder > 0 && remainder >= curNum - 1) {
        translated += 'I' + curLetter;
        remainder -= (curNum + 1);
      } else if (remainder > 10 && remainder >= curNum - 10) {
        translated += 'X' + curLetter;
        remainder -= (curNum - 10);
      } else if (remainder > 100 && remainder >= curNum - 100) {
        translated += 'C' + curLetter;
        remainder -= (curNum - 100);
      }
    }
    return translated;
  }
  return convertNum(num);
};

module.exports = toRoman;
