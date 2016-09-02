var BigInt = require('./big-integer');

var Grains = function() {
  this._square = function(squareNum) {
    var bigI = BigInt(2)
    return bigI.pow(squareNum - 1);
  }

  this.square = function(squareNum) {
    return this._square(squareNum).toString();
  };

  this.total = function() {
    var bigI = BigInt(0)
    for (var n = 1; n <= 64; n++) {
      bigI = bigI.add(this._square(n));
    }
    return bigI.toString();
  };
};

module.exports = Grains;
