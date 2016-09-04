var Clock = function() {};

Clock.at = function(hours, minutes) {
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

  // handle negative hours
  while (hours < 0) {
    hours = 24 + hours;
  }

  // handle negative minutes
  while (minutes < 0) {
    console.log(hours, 'and', minutes);
    hours -= 1;
    minutes = 60 + minutes;
  }
  // handle negative hours
  while (hours < 0) {
    hours = 24 + hours;
  }
  // roll-over minutes
  if (minutes >= 60) {
    hours += Math.floor(minutes/60);
    minutes = minutes % 60;
  }

  // roll-over hours
  if (hours >= 24) {
    hours = hours % 24;
  }

  var timeString = _leftPad(hours) + ':' + _leftPad(minutes);
  return timeString;
}

module.exports = Clock;
