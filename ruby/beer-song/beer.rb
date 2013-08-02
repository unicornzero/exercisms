class Beer

  def sing(start, final = 0)
    song = ""
    start.downto(final) {|number| song << verse(number) + "\n"}
    song
  end

  def verse(qty)
    construct_verse(qty)
  end

  private
  def construct_verse(qty)
    wall = " on the wall"
    down = "down and pass it around,"
    starter = start_num?(qty) + beers?(qty) + wall + ", " + start_num?(qty) + beers?(qty)
    middle = ".\nTake " + one?(qty) + down + " " + end_num?(qty)
    ender = beers?(qty-1) + wall + ".\n"
    last_middle = ".\nGo to the store and buy some more, 99"

    if qty > 2
      starter + middle + ender
    elsif qty == 2
      starter + middle + ender
    elsif qty == 1
      starter + middle + ender
    elsif qty == 0
      starter.capitalize + ".\nGo to the store and buy some more, 99" + ender
    end
  end

  def start_num?(number)
    number == 0 ? "no more" : number.to_s
  end

  def beers?(number)
    number == 1 ? " bottle of beer" : " bottles of beer"
  end

  def one?(number)
    number == 1 ? "it " : "one "
  end

  def end_num?(number)
    number < 2 ? "no more" : (number - 1).to_s
  end



end
