var Clock = function() {};

Clock.at = function(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;

  var normalizeTime = function() {
    minutes = this.minutes;
    hours = this.hours;
    // console.log('hours ', hours, ' and minutes', minutes)

    if (minutes < 0 || minutes >= 60) {
      hours += Math.floor(minutes/60);
      minutes = minutes < 0 ? 60 + minutes % 60 : minutes % 60;
    }
    // console.log('hours ', hours, ' and minutes', minutes)

    if (hours < 0 || (hours >= 24)) {
      hours = hours < 24 ? 24 + hours % 24 : hours % 24;
      //case is -48 hours
      hours = hours < 0 ? 24 + hours % 24 : hours % 24;
    }
    // console.log('hours ', hours, ' and minutes', minutes)

    this.hours = hours;
    this.minutes = minutes;
  }
  // console.log('hours ', hours, ' and minutes', minutes)
  this.toString = function() {
    normalizeTime();
    var _leftPad = function(num) {
      if (num > 9) {
        return String(num);
      } else if (num > 0 && num <=9) {
        return '0' + num;
      } else {
        return '00';
      }
    };
    return _leftPad(this.hours) + ':' + _leftPad(this.minutes)
  }
  this.plus = function(minutes) {
    this.minutes += minutes;
    return this;
  };

  this.minus = function(minutes) {
    this.minutes -= minutes;
    return this;
  };

  this.equals = function(otherClock) {
    console.log(this.minutes);
    console.log(otherClock.minutes);
    return this.hours == otherClock.hours && this.minutes == otherClock.minutes;
  };

  return this;
}


module.exports = Clock;
