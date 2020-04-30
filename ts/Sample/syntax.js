var i = 0;
var incrementIndex = function (value) {
    i += (value === undefined ? 1 : value);
};
//This Function can be called like:
incrementIndex();
incrementIndex(0);
incrementIndex(3);
var numberToString = function (n) { return n.toString(); };
// This can be used ina function like map on an array 
// to convert all numbers into a String, if you hover 
// on stringedNumbers below you can see the expected types.
var stringedNumbers = [1, 4, 6, 10].map(function (i) { return numberToString(i); });
// We can use Shorthand to have the function passed directly
// and get the same results with mpore focussed code:
var stringedNumbersT = [1, 4, 6, 10].map(numberToString);
var printFormattedName = function (input) { };
printFormattedName({ name: "Elite" });
printFormattedName({ name: "Elite", age: 21 });
var boolOrNumberedFunction = function (input) { };
boolOrNumberedFunction(true);
boolOrNumberedFunction(21);
