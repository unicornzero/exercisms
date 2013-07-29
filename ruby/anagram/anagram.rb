Anagram = Struct.new(:word) do

	def match(anagrams)
		results = []
		anagrams.each do |candidate|
		  if alphasort(candidate) == alphasort(word)
				results << candidate 
			end
		end
		results
	end

	private
		def alphasort(word)
			word.downcase.split("").sort
		end
end