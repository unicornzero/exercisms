var FoodChain = function() {

  this.verses = function(startVerse, endVerse) {
    var song = '';
    for (verse = startVerse; verse <= endVerse; verse ++) {
      song += this.verse(verse) + '\n';
    }
    return song;
  }

  this.verse = function(verse) {
    var animals = [
      ['fly', ''],
      ['spider', 'It wriggled and jiggled and tickled inside her.\n'],
      ['bird', 'How absurd to swallow a bird!\n'],
      ['cat', 'Imagine that, to swallow a cat!\n'],
      ['dog', 'What a hog, to swallow a dog!\n'],
      ['goat', 'Just opened her throat and swallowed a goat!\n'],
      ['cow', 'I don\'t know how she swallowed a cow!\n'],
      ['horse', 'She\'s dead, of course!\n']
    ];
    var lyrics = `I know an old lady who swallowed a ${animals[verse - 1][0]}.\n`;
    for (i = verse - 1; i >= 1; i--) {
      if (i === verse - 1  || i < 2) {
        lyrics += animals[i][1];
        if (verse === 8) {
          return lyrics;
        }
      }
      lyrics += `She swallowed the ${animals[i][0]} to catch the ${animals[i - 1][0]}`;
      lyrics += '.\n';
    }
    if (verse > 2) {
      lyrics = lyrics.replace('.\nIt', ' that');
    }
    return lyrics += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  }
};


module.exports = FoodChain;