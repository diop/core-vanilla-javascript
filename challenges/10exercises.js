// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
function max(x, y){
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    }
}

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if ( y > x && y > z){
        return y;
    } else {
        return z;
    }
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(x){
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        return true;
    } else {
        return false;
    }
}

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(text){
    var toTranslate = text.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u", " "];
    var translated = "";
    for (i = 0; i < toTranslate.length; i++) {
       var tempText = string.charAt(i);
      if (vowels.indexOf(tempText) != -1)
      y = (y + (tempText));
     else
      y = (y + (temText + "o" + current));
    }
    return y;
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(total, num) {
    return total + num;
}
function multiply() {

}

// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(text){
    return text.split("").reverse().join("");
}

// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
function englishToSwedish(){
    var card = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
    var translation = ""
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr){
    var longest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (longest < arr[i].length) {
            longest = arr[i];
        }
        return longest;
    }
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongestWords(words, i){

}

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq()
