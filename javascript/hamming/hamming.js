var Hamming = function () {

  this.compute = function (origStrand, compStrand) {
    var strandLength = origStrand.length;
    var hammingDistance = 0;

    if (strandLength !== compStrand.length) {
      throw 'DNA strands must be of equal length.';
    }
    while (strandLength--) {
      if (origStrand.charAt(strandLength) !== compStrand.charAt(strandLength)) {
        hammingDistance += 1;
      }
    }
    return hammingDistance;
  };
};

module.exports = Hamming;