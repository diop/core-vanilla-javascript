exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      var greeting = "";
      function fn(obj){
        greeting = "Yo, " + obj;
        return greeting;
      }
  },

  alterObjects: function(constructor, greeting) {


  },

  iterate: function(obj) {
      
  }
};
