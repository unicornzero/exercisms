class Phrase
  attr_reader :word_count

  def initialize(words)
    count(words)
  end

  private
    def count(words)
      @word_count = words.downcase.scan(/\w+/)
    end
end