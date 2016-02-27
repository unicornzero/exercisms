var BeerSong = function() {};

BeerSong.prototype.sing = function(startVerse, endVerse) {
  var endVerse = endVerse || 0;
  var song = '';
  for (verseNum = startVerse; verseNum >= endVerse; verseNum--) {
    song += this.verse(verseNum);
    verseNum !== endVerse ? song += '\n' : null;
  };
  return song;
};

BeerSong.prototype.verse = function(verseNum) {
  var verse = `${_bottlesOnWall(verseNum)}, `;
  verse += `${_bottles(verseNum).toLowerCase()}.\n`;
  if (verseNum == 0) {
    return verse += `Go to the store and buy some more, ${_bottlesOnWall(99)}.\n`;
  } else {
    verse += `Take ${verseNum === 1 ? "it" : "one"} down and pass it around, `;
    return verse += `${_bottlesOnWall(verseNum - 1).toLowerCase()}.\n`;
  }

  function _count(qty) {
    return qty == 0 ? 'No more' : qty;
  };

  function _bottlesOnWall(qty) {
    return `${_bottles(_count(qty))} on the wall`;
  };

  function _bottles(qty) {
    return qty == 1 ? `${_count(qty)} bottle of beer` : `${_count(qty)} bottles of beer`;
  };
};

module.exports = BeerSong;