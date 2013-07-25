class Bob

  def hey(phrase = nil)
    phrase ||= " "
    if is_yelling?(phrase)
      'Woah, chill out!'
    elsif is_question?(phrase)
      'Sure.'  
    elsif is_statement?(phrase)
      'Whatever.'
    elsif is_quiet?(phrase)
      'Fine. Be that way.'
    end
  end

  def is_question?(phrase)
    phrase.match(/.+\?$/) ? true : false
  end

  def is_yelling?(phrase)
    phrase.match(/[A-Z\W]{3,}/) &&  (phrase == phrase.upcase)

  end

  def is_statement?(phrase)
    phrase.match(/\w+/) ? true : false
  end

  def is_quiet?(phrase)
    phrase.match(/\s*/) ? true : false
  end


end