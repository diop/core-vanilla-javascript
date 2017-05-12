exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
      var splitString = str.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
  }
};
