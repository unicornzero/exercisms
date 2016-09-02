var Triangle = function(a, b, c) {
  this.kind = function() {
    var containsInvalidSide = a <= 0 || b <= 0 || c <= 0;
    var containsSideTooShort = (a + b < c || b + c < a || c + a < b);
    if (containsInvalidSide || containsSideTooShort) {
      throw 'invalid triangle sides';
    } else if (a == b && b == c) {
      return 'equilateral';
    } else if (a == b || b == c || c == a) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
};

module.exports = Triangle;
