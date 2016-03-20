var FoodChain = function() {

  this.verses = function(startVerse, endVerse) {
    var song = '';
    for (verse = startVerse; verse <= endVerse; verse++) {
      song += this.verse(verse) + '\n';
    }
    return song;
  }

  this.verse = function(verse) {
    var animals = [
      [],
      ['fly', ''],
      ['spider', 'It wriggled and jiggled and tickled inside her.\n'],
      ['bird', 'How absurd to swallow a bird!\n'],
      ['cat', 'Imagine that, to swallow a cat!\n'],
      ['dog', 'What a hog, to swallow a dog!\n'],
      ['goat', 'Just opened her throat and swallowed a goat!\n'],
      ['cow', 'I don\'t know how she swallowed a cow!\n'],
      ['horse', 'She\'s dead, of course!\n']
    ];
  
    var animal = (animalId) => {
      return animals[animalId][0];
    }

    var nextAnimal = (currentAnimalId) => {
      return animal(currentAnimalId - 1);
    };

    var reactionToConsumption = (animalId) => {
      return animals[animalId][1];
    };

    var consumptionReasoning = (num) => {
      return `She swallowed the ${animal(num)} to catch the ${nextAnimal(num)}.\n`
    };

    var isLastOrSecond = (iteration) => {
      return (num === verse  || num === 2);
    }

    var lyrics = `I know an old lady who swallowed a ${animal(verse)}.\n`;
    for (num = verse; num >= 2; num--) {
      if (isLastOrSecond(num, verse)) {
        lyrics += reactionToConsumption(num);
        if (verse === 8) {
          return lyrics;
        }
      }
      verse > 2 ? lyrics = lyrics.replace('.\nIt', ' that') : null;
      lyrics += consumptionReasoning(num);
    }
    return verse !== 8 
      ? lyrics += "I don't know why she swallowed the fly. Perhaps she'll die.\n" 
      : lyrics;
  }

};


module.exports = FoodChain;