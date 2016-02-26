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
  var verseText = `${_beerOnWall(verseNum)}, ${_pluralizeBottle(verseNum == 0 ? 'No more' : verseNum).toLowerCase()} of beer.\n`;
  if (verseNum == 0) {
    return verseText += `Go to the store and buy some more, ${_beerOnWall(99)}.\n`;
  } else {
    return verseText += `Take ${verseNum === 1 ? "it" : "one"} down and pass it around, ${_beerOnWall(verseNum - 1).toLowerCase()}.\n`;
  }

  function _beerOnWall(verseNum) { 
    return `${_pluralizeBottle(verseNum == 0 ? 'No more' : verseNum)} of beer on the wall`;
  };

  function _pluralizeBottle(qty) {
    return qty == 1 ? `${qty} bottle` : `${qty} bottles`;
  };
};

module.exports = BeerSong;