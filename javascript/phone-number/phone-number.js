var PhoneNumber = function(rawNumber) {
  this.rawNumber = rawNumber;
};

PhoneNumber.prototype.number = function() {
  var digits = this.rawNumber.replace(/\D+/g, '');
  if (digits.length === 11 && digits[0] == 1) {
    return digits.slice(1);
  } else {
    return digits.length === 10 ? digits : '0000000000';
  }
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  var num = this.number();
  return `(${this.areaCode()}) ${num.slice(3, 6)}-${num.slice(6, 10)}`;
};

module.exports = PhoneNumber;