function Year(year) {
  this.year = year;
};

Year.prototype.isLeap = function () {
  function _divisibleBy(dividend, divisor) {
    return dividend % divisor == 0;
  };
  
  var year = this.year;
  if (_divisibleBy(year, 400)) {
    return true
  } else {
    return _divisibleBy(year, 4) && !_divisibleBy(year, 100);
  };
};

module.exports = Year;