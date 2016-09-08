function toRoman(num) {
  var repeat = function(letter, quantity) {
    var string = ''
    for (var i = 1; i <= quantity; i++) {
      string += 'I';
    }
    return string;
  }
  var numerals = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
  ];
  var builder = function (num) {
    var remainder = num;
    var string = '';
    for (var n in numerals) {
      var major = numerals[n];
      var minor = numerals[Number(n+1)] || [0, ''];
      console.log('major :', major);
      // console.log('minor :', minor);
      if (remainder >= Number(major[0] + minor[0])) {
        console.log('lesser----------------------------------');
        string += minor[1] + major[1];
        remainder -= (minor[0] + major[0]);
      } else if (remainder >= major[0]) {
        console.log(remainder);
        console.log('greater+++++++++++++++++++++++++++++++++');
        // console.log(remainder/major[0]);
        // console.log(major[1]);
        // console.log(repeat(major[1], Math.floor(remainder/major[0])));
        string += repeat(major[1], Math.floor(remainder/major[0]));
        remainder = remainder % major[0];
      } else {
        console.log('else, :', Number(major[0] + minor[0]));
      }
      console.log('string :', string);
    }
    console.log('string :', string);
    return string;
  }
  console.log('==================================================');
  console.log('builder result: ', builder(num));



  var convertNum = function(num) {
    var romanNumber = '';
    if (num < 4) {
      romanNumber += repeat('I', num);
    } else if (num === 4) {
      romanNumber += 'I';
      romanNumber += 'V';
    } else if (num === 5) {
      romanNumber += 'V';
    } else if (num < 9) {
      romanNumber += 'V';
      romanNumber += repeat('I', num - 5);
    } else if (num === 9) {
      romanNumber += 'I';
      romanNumber += 'X';
    } else if (num === 10) {
      romanNumber += 'X';
    }
    return romanNumber;
  }

  if (num > 10) {
    var romanNumber = '';
    while (num > 10) {
      romanNumber += convertNum(10);
      num -= 10;
    }
    if (num > 0) {
      romanNumber += convertNum(num);
    }

    console.log('romanNumber = ', romanNumber);
    return romanNumber;
  } else {
    console.log('convertNum(num) = ', convertNum(num));
    return convertNum(num);
  }
};



module.exports = toRoman;
