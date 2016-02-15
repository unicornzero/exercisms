function Year(year) {
  this.year = year;
};

Year.prototype.isLeap = function () {
  function divisibleByFour(year) {
    return year % 4 == 0;
  };
  function divisibleByOneHundred(year) {
    return year % 100 == 0;
  };
  function divisibleByFourHundred(year) {
    return year % 400 == 0;
  };
  
  var year = this.year;
  if (divisibleByFourHundred(year)) {
    return true
  } else {
    return divisibleByFour(year) && !divisibleByOneHundred(year);
  };
};

module.exports = Year;