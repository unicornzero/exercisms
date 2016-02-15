var Hamming = function () {

  this.compute = function (orig_strand, comp_strand) {
    if (orig_strand.length != comp_strand.length) {
      throw 'DNA strands must be of equal length.';
    }
    var hamming_distance = 0;
    for (i=0, length = orig_strand.length; i < length; i++) {
      if (orig_strand.charAt(i) != comp_strand.charAt(i)) {
        hamming_distance += 1;
      }
    }
    return hamming_distance;
  };
};

module.exports = Hamming;