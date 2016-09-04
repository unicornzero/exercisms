var Clock = function(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
  this._normalizeTime = function() {
    if (this.minutes < 0 || this.minutes >= 60) {
      this.hours += Math.floor(this.minutes/60);
      this.minutes = this.minutes < 0 ? 60 + this.minutes % 60 : this.minutes % 60;
    }
    while (this.hours < 0 || this.hours >= 24) {
      this.hours = this.hours >= 24 ? this.hours % 24 : 24 + this.hours % 24;
    }
  }
  this._normalizeTime();
};

Clock.prototype.toString = function() {
  this._normalizeTime();
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
};

Clock.prototype.plus = function(minutes) {
  this.minutes += minutes;
  return this;
};

Clock.prototype.minus = function(minutes) {
  this.minutes -= minutes;
  return this;
};

Clock.prototype.equals = function(otherClock) {
  return this.toString() == otherClock.toString();
};

Clock.at = function(hours, minutes) {
  return new Clock(hours, minutes);
}

module.exports = Clock;
