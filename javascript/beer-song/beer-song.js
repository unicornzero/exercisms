var BeerSong = function() {};

BeerSong.prototype.sing = function(startVerse, endVerse) {
  var song = '';
  var endNum = endVerse || 0;
  for (num = startVerse; num >= endNum; num--) {
    song += this.verse(num);
    num !== endNum ? song += '\n' : null;
  };
  return song;
};

BeerSong.prototype.verse = function(num) {
  var verseText = `${_countingPhrase(num)}`;
  if (num == 0) {
    verseText += `Go to the store and buy some more, ${_onTheWall(_remainder(99))}.\n`;
  } else {
    verseText += `Take ${num === 1 ? "it" : "one"} down and pass it around, ${_onTheWall(_remainder(num - 1).toLowerCase())}.\n`;
  }
  return verseText;

  function _countingPhrase(num) {
    var remainder = _remainder(num);
    return `${_onTheWall(remainder)}, ${remainder.toLowerCase()} of beer.\n`

  };

  function _onTheWall(num) {
    return `${num} of beer on the wall`
  }

  function _remainder(num) {
    if (num == 0) {
      return `No more bottles`;
    } else if (num == 1) {
      return `${num} bottle`;
    } else {
      return `${num} bottles`;
    }
  };
};

module.exports = BeerSong;