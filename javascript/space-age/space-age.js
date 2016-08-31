function SpaceAge (ageInSeconds) {
  this.seconds = ageInSeconds;
  this._years = ageInSeconds / 31557600;

  this._round = function(num) {
    return +(parseFloat(num).toFixed(2));
  };

  this._convert = function(orbitalPeriod) {
    return this._round(this._years / orbitalPeriod);
  }

  this.onEarth = function() {
    return this._round(this._years);
  };

  this.onMercury = function() {
    return this._convert(0.2408467);
  };

  this.onVenus = function() {
    return this._convert(0.61519726);
  };

  this.onMars = function() {
    return this._convert(1.8808158);
  };

  this.onJupiter = function() {
    return this._convert(11.862615);
  };

  this.onSaturn = function() {
    return this._convert(29.447498);
  };

  this.onUranus = function() {
    return this._convert(84.016846);
  };

  this.onNeptune = function() {
    return this._convert(164.79132);
  };
};

module.exports = SpaceAge;
