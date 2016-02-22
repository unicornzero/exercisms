function Gigasecond(startDate) {
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  var startDateMilliseconds = new Date(this.startDate).getTime();
  var gigasecondLater = new Date(startDateMilliseconds + Math.pow(10, 12));
  return gigasecondLater;
};

module.exports = Gigasecond;
