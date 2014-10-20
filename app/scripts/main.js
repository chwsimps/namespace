(function() {

var root = this;
var chase = {}

root.chase = chase;

// Method 1 - Size ====================
chase.size = function (x) {
  return(x.length);
};

// Method 2. - Object  ===================
chase.object = function( x, y) {
    if (x == null) return {};
    var result = {};

    for (var i = 0, length = x.length; i < length; i++) {
      if (y) {

        result[x[i]] = y[i];
      }

      else {
        result[x[i][0]] = x[i][1];
      }
    }
    return result;
  };

// Method 3. - First =============================
chase.first = function (list) {
  return(list[0]);
};


// Method 4. Each- ==================================

chase.each = function( x, y ){
  var top = x.length;
  for(var index = 0; index < top; index = index +1){
    var item = x[index]
    y(item);
  }
};

}());


// NOTES =====================================================================

// Setup main object
    // var chase = {};
    //
    // chase.each = function (c) {
    //   if (c == null) return;
    // };


// Greeting function
    // chase.greeting = function () {
    //   alert(message);
    // };

// Random function
    // chase.random = function (min, max) {
    //   if (max == null) {
    //     max = min;
    //     min = 0;
    //   }
    //   return min + Math.floor(Math.random () * (max - min + 1));
    // };


// Function will return a new array
// Take two parameters
  // 1. an array
  // 2. a callback, function
