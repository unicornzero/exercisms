var Year = function(year) {

  this.isLeap = function () {
    function _yearDivisibleBy(divisor) {
      return year % divisor == 0;
    };
    return _yearDivisibleBy(400) || _yearDivisibleBy(4) && !_yearDivisibleBy(100);
  };
};

module.exports = Year;