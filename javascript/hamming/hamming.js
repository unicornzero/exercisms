var Hamming = function () {

  this.compute = function (orig_strand, comp_strand) {
    var strand_length = orig_strand.length;
    var hamming_distance = 0;

    if (strand_length !== comp_strand.length) {
      throw 'DNA strands must be of equal length.';
    }
    while (strand_length--) {
      if (orig_strand.charAt(strand_length) !== comp_strand.charAt(strand_length)) {
        hamming_distance += 1;
      }
    }
    return hamming_distance;
  };
};

module.exports = Hamming;