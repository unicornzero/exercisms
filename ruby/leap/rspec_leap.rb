require 'rspec'
require_relative 'year'

describe Year do
  context '#leap?' do
    it 'is true for 1996' do
      year = Year.new(1996)
      expect(year.leap?).to be_true
    end

    it 'is false for 1997' do
      year = Year.new(1997)
      expect(year.leap?).to be_false
    end

    it 'is false for century' do
      year = Year.new(1900)
      expect(year.leap?).to be_false
    end

    it 'is true if divisible by 400' do
      year = Year.new(2400)
      expect(year.leap?).to be_true
    end
  end
end
