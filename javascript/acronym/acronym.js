function Acronym () {};

Acronym.parse = function(phrase) {
  var acronymInPhrase = new RegExp(/^[A-Z][A-Z]+/);
  var capitalsAndFirstLetters = new RegExp(/([A-Z])|\W([a-z])/g);
  var matches = phrase.match(acronymInPhrase) || phrase.match(capitalsAndFirstLetters)
  return matches.join('')
    .toUpperCase()
    .replace(/\W/g, '');
};

module.exports = Acronym;
