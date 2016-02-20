var Bob = function() {};

Bob.prototype.hey = function(words) {
  if (_shouting(words)) {
    return 'Whoa, chill out!';
  } if (_questioning(words)) {
    return 'Sure.';
  } if (_silent(words)) {
    return 'Fine. Be that way!';
  };
  return 'Whatever.';

  function _shouting(words) {
    if (words === words.toLowerCase()) {
      return false
    } else {
      return words === words.toUpperCase();
    };
  };
  
  function _questioning(words) {
    var lastChar = words.charAt(words.length - 1);
    return lastChar == '?'
  };
  
  function _silent(words) {
    var emptiness = /^\s*$/;
    var silence = emptiness.test(words);
    return !!silence;
  };
};

module.exports = Bob;
