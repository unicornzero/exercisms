class Bob

  def hey(phrase = nil)
    @phrase = phrase || ""
    determine_response
  end

  def determine_response
    @is_question = /.+\?$/
    @is_yelling = /^[^a-z]{1,}$/
    @is_statement = /.*[a-z]+[^?]+$/
    @is_quiet = /^\s*$/
 
    #return 'Woah, chill out!' if is_yelling?(@phrase)
    case @phrase
    when @is_question
      'Sure.'  
    when @is_statement
      'Whatever.'
    when @is_yelling
      'Woah, chill out!'
    when @is_quiet
      'Fine. Be that way.'
    end
  end

  def is_yelling?(phrase)
    phrase.match(/[A-Z\W]{3,}/) &&  (phrase == phrase.upcase)
  end

=begin
  def is_question?(phrase)
    phrase.match(/.+\?$/) ? true : false
  end

  def is_statement?(phrase)
    phrase.match(/\w+/) ? true : false
  end

  def is_quiet?(phrase)
    phrase.match(/\s*/) ? true : false
  end
=end

end