function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = '';
  for (index in dnaStrand) {
    var nucleotide = dnaStrand.charAt(index);
    rnaStrand += _translateNucleotide(nucleotide);
  }
  return rnaStrand;

  function _translateNucleotide(nucleotide) {
    var nucleotideComplements = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
    return nucleotideComplements[nucleotide];
  };
};

module.exports = DnaTranscriber;