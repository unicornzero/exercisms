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
  var verseText = `${_bottles(_count(verseNum))} on the wall, `;
  verseText += `${_bottles(_count(verseNum)).toLowerCase()}.\n`;
  if (verseNum == 0) {
    return verseText += `Go to the store and buy some more, ${_bottlesOnWall(99)}.\n`;
  } else {
    verseText += `Take ${verseNum === 1 ? "it" : "one"} down and pass it around, `;
    return verseText += `${_bottlesOnWall(verseNum - 1).toLowerCase()}.\n`;
  }

  function _count(qty) {
    return qty == 0 ? 'No more' : qty;
  };

  function _bottlesOnWall(qty) {
    return `${_bottles(_count(qty))} on the wall`;
  };

  function _bottles(qty) {
    return qty == 1 ? `${qty} bottle of beer` : `${qty} bottles of beer`;
  };
};

module.exports = BeerSong;