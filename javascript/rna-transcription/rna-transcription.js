var DnaTranscriber = function() {};

DnaTranscriber.prototype = {
  _translateNucleotide: function(nucleotide) {
    var nucleotideComplements = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
    return nucleotideComplements[nucleotide];
  },

  toRna: function(dnaStrand) {
    var rnaStrand = '';
    for (index in dnaStrand) {
      var nucleotide = dnaStrand.charAt(index);
      rnaStrand += this._translateNucleotide(nucleotide);
    }
    return rnaStrand;
  }
};

module.exports = DnaTranscriber;