var BeerSong = function() {};

BeerSong.prototype.sing = function(startNum, endVerse) {
  var song = '';
  var endNum = endVerse || 0;
  for (num = startNum; num >= endNum; num--) {
    song += this.verse(num);
    num !== endNum ? song += '\n' : null;
  };
  return song;
};

BeerSong.prototype.verse = function(num) {
  if (num == 0) {
    var verseText = _verseZero(num)
  } else if (num == 1) {
    var verseText = _verseOne(num)
  } else if (num == 2) {
    var verseText = _verseTwo(num)
  } else {
    var verseText = _middleVerse(num)
  }
  return verseText;

  function _middleVerse(num) {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
  };

  function _verseTwo(num) {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottle of beer on the wall.\n`;
  };

  function _verseOne(num) {
    return `${num} bottle of beer on the wall, ${num} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
  };

  function _verseZero(num) {
    return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
  };

};

module.exports = BeerSong;