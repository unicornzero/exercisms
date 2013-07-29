Anagram = Struct.new(:word) do

	def match(anagrams)
		anagrams.each_with_object([]) do |candidate|
		 candidate if candidate.downcase.split.sort == word.downcase.split.sort
		end
	end

end