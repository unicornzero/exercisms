var Clock = function() {
};

Clock.at = function(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
  var maxValues = {'minutes': 60, 'hours': 24}

  var _leftPad = function(num) {
    if (num > 9) {
      return String(num);
    } else if (num > 0 && num <=9) {
      return '0' + num;
    } else {
      return '00';
    }
  };

  if (minutes < 0 || minutes >= 60) {
    hours += Math.floor(minutes/60);
    minutes = minutes < 0 ? 60 + minutes % 60 : minutes % 60;
  }

  if (hours < 0 || (hours >= 24)) {
    hours = hours < 0 ? 24 + hours % 24 : hours % 24;
  }

  // console.log('hours ', hours, ' and minutes', minutes)
  this.toString = function() {return _leftPad(hours) + ':' + _leftPad(minutes)}
  this.plus = function() {return this};
  return this;
}


module.exports = Clock;
