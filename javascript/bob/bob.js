var Bob = function() {};

Bob.prototype = {
  
  shouting: function(words) {
    if (words == words.toLowerCase()) {
      return false
    } else {
      return words == words.toUpperCase();
    };
  },
  
  questioning: function(words) {
    var last_char = words.charAt(words.length - 1);
    return last_char == '?'
  },
  
  silent: function(words) {
    var emptiness = /^\s*$/;
    var silence = words.match(emptiness);
    if (silence) { return true; };
  },
  
  hey: function(words) {
    if (this.shouting(words)) {
      return 'Whoa, chill out!';
    };
    if (this.questioning(words)) {
      return 'Sure.';
    };
    if (this.silent(words)) {
      return 'Fine. Be that way!';
    };
    return 'Whatever.';
  }
};

module.exports = Bob;
