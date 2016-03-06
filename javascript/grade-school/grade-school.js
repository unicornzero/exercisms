var School = function() {
  this._roster = {};

  this.roster = function() {
    return this._roster;
  };

  this.add = function(studentName, gradeNumber) {
    this._roster[gradeNumber] = (this._roster[gradeNumber] || [])
      .concat(studentName)
      .sort();
  };

  this.grade = function(gradeNumber) {
    return this._roster[gradeNumber] || [];
  }
};

module.exports = School;