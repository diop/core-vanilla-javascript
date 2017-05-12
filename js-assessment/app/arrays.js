exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      for (var i = 0; i < arr.length; i++){
          if (arr[i] === item) {
              return i;
          }
      }
      return -1;
  },

  sum: function(arr) {
     var total=0;
     for(var i in arr) {
        total += arr[i];
     }
     return total;
  },

  remove: function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === item) {
        arr.splice(i, 1);
        }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
      var i, j, count = 0;
      for (i = 0, j = arr.length; i < j; i++) {
          (arr[i] === item) && count++;
      }
      return count;
  },

  duplicates: function(arr) {
    var result = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++){
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        result.push(i);
    }
    return result;
  },

  square: function(arr) {
      return arr.map(function (x) {
          return Math.pow(x, 2);
      });
  },

  findAllOccurrences: function(arr, target) {

  }
};
