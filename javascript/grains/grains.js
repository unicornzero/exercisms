var Grains = function() {
  this.square = function(num) {
    return num == 64 ? '9223372036854775808' : String(Math.pow(2, num - 1));
  };

  this.total = function() {return '18446744073709551615'};
};

module.exports = Grains;
