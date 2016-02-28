var PhoneNumber = function(rawNumber) {
  this.rawNumber = rawNumber;
};

PhoneNumber.prototype.number = function() {
  var digits = this.rawNumber.replace(/\D+/g, '');
  if (digits.length === 11 && digits[0] == 1) {
    return digits.slice(1);
  } else if (digits.length !== 10) {
      return '0000000000';
  } else {
    return digits;
  }
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  var num = this.number();
  var formatted = "(" + num.slice(0, 3) + ") " + num.slice(3, 6) + "-" + num.slice(6, 10);
  return formatted;
};

module.exports = PhoneNumber;