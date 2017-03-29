function Capitalize(str)
//Assumes: str is a word
//Returns: str with first letter capitalized, all others lowercase
{
	var firstLetter, restString, cap;
	firstLetter = str.charAt(0);					//GET FIRST CHAR
	restString = str.substring(1, str.length);		//GET REST OF WORD
	cap = firstLetter.toUpperCase() + restString.toLowerCase();
													// PUT BACK TOGETHER
	return cap;												
}
function Rotate(str)
//Assumes: assumes a word is defined
//Returns: copy of that string in which all characters are shifted one position to the left
{
	var firstLetter, restString, rotate;
	firstLetter = str.charAt(0);					
	restString = str.substring(1, str.length);	
	rotate = (restString.toLowerCase())+(firstLetter.toLowerCase());
	return rotate;
}
function Classify(str)
//Assumes: assumes a string is defined
//Returns: either the string 'word' or the string 'phrase' in outputDiv
{
	var search, word, phrase;
		search = str.search(' ');
		word = 'word';
		phrase = 'phrase';
		
		if (search == -1)
			{
				return word;
			}
			else 
				{
					return phrase;
				}

}
function PigLatin(str)
//Assumes: a string is defined
//Returns: either returns the strings 'illegal input' , the string plus 'way', or the final result possibility.
{
	var searchVowel, firstLetter, begString, result, searchOne;
	searchVowel = str.search(/[aeiouAEIOU]/);
	firstLetter = str.charAt(0);
	searchOne = str.search(' ');
	phrase = 'illegal input';
	
	begString = str.substring(0, searchVowel);
	if (searchOne != -1)
		{
			return phrase;
		}
		
		if ((searchVowel == -1)||(searchVowel == 0))
		{
			result = str + 'way';
			return result;
		}
			else 
				{
					result = (str.substring(searchVowel, str.length)) + (begString) + 'ay';
					return result;
					
				}
	
}
function Reverse(str)
//Assumes: str is defined
//Returns: reverse order of the original string
{
	var string, copy, i;
	
	string = str.substring(0, str.length);
	
	copy = '';
	
	i = 0;
		while (i < str.length)
			{
				copy = str.charAt(i) + copy;
				i = i + 1;
				
			}
			return copy;
			
}
function Strip(phrase)
//Assumes: assumes a phrase is inputed
//Returns: phrase with all punctuation stripped away
{
	var index, phrase;
	index = phrase.search(/[ .,;:'!\?]/);	// LOOK FOR SPACE/PUNCTUATION
		while (index != -1)
			{
				phrase = phrase.substring(0, index) +
				phrase.substring(index + 1, phrase.length);
				index = phrase.search(/[ .,;:'!\?]/);		//LOOK FOR ANOTHER
				
			}
			return phrase;
}
