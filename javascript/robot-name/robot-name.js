var existingRobotNames = new Array;
var numberRange = []
for(var i = 100; i < 1000; i++) { numberRange.push(i) }

var RobotName = function () {
  var randomId = function() {
    return numberRange[Math.floor(Math.random() * numberRange.length)];
  };

  var randomAToZ = function() {
    var num = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(num);
  };

  var newName = function() {
    return randomAToZ() + randomAToZ() + randomId();
  }

  var uniqueNewName = function() {
    var proposedName = newName();
    if(existingRobotNames.indexOf(proposedName) < 0) {
      existingRobotNames.push(proposedName);
      return proposedName;
    } else {
      return uniqueNewName()
    }
  }

  this.reset = function() {
    this.name = uniqueNewName();
  };

  this.name = uniqueNewName();
}

module.exports = RobotName;
