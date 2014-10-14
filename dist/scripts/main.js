// Method 1 - Size ====================
var chase = {}

var myArray = [1, 2, 3, 4, 5];

chase.size = function (list) {
  return(list.length);
};

var c = chase.size(myArray);

console.log(c);

// Method 2. - Object  ===================
var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Chase"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "28yrs"];
var wendy=[];

wendy.object = function( ironYard, age) {
    if (ironYard == null) return {};
    var result = {};

    for (var i = 0, length = ironYard.length; i < length; i++) {
      if (age) {

        result[ironYard[i]] = age[i];
      }


      else {
        result[ironYard[i][0]] = ironYard[i][0]; //Showing first letter of name if age is not defined.
      }
    }
    return result;
  };

  var w= wendy.object(ironYard,age);

  console.log(w);

// Method 3. - First =============================

var list = [1, 2, 3, 4, 5]

chase.first = function (list) {
  return(list[0]);
};

var first = chase.first(list);

console.log(first);

// Method 4. Each- ==================================

chase.each = function(list,ears){
  var top = list.length
  for(var index = 0;index < top;index = index +1){
    var item = list[index]
    ears(item)

  }
};

chase.each(['videos','cheese','wine'],function(foo){
  console.log(foo.length);
});


// Setup main object
    // var chase = {};
    //
    // chase.each = function (arr) {
    //   if (arr == null) return;
    //   console.log(arr);
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
