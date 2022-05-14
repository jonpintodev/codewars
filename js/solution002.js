//Write a function that takes an array of words
//smashes them together into a sentence
//returns the sentence. 
//You can ignore any need to sanitize words or add punctuation,
//add spaces between each word. 
//Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//Example
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) { 
  return words.join(' ');
}