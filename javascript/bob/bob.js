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
    return (words !== words.toLowerCase() && words === words.toUpperCase());
  };
  
  function _questioning(words) {
    return words.charAt(words.length - 1) == '?';
  };
  
  function _silent(words) {
    return /^\s*$/.test(words);
  };
};

module.exports = Bob;
