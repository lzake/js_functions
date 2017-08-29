/ Without using any built in Array methods
//   create a function that does what reduce does
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function reduce(input, callback, initial) {
    var objSum = 0;
    var lastObjSum = 0;
    var typeChecker = "";
    var finalString = "";

   for (var key in input) {
        var checker = input[key];
        var parse = parseInt(checker);
        if (!isNaN(parse)) {              // if input is a number in string format, typeCherk is number
            typeChecker = "number"       //update typeChecker and break.
            break;
        }

       if (typeof checker === "number") { // if input is a string then update typeChecker and break
            typeChecker = "number"
            break;
        }

       if (typeof checker == "string") { // if input is a string then update typeChecker and break
            typeChecker = "string"
            break;
        }
    }

   if (typeChecker === "string") {  // if input is a string, concat the strings
        for (let key in input) {
            checker = input[key];
            finalString += checker + " ";
        }
    }

   if (typeChecker === "number") { //if input was a number, sum the array of numbers
        for (let key in input) {
            checker = input[key];
            objSum += +checker;
        }
        console.log(objSum);
        return objSum;
    }

   if (lastObjSum !== 0) { // if lastObjSum was used, return it.
        console.log(lastObjSum);
        return lastObjSum;
    }

   if (lastObjSum <= 0) { // If lastObjSum was not used, return finalString.
        console.log(finalString)
        return finalString;
    }

   if (objSum > 0) { // if objSum was used, return it.
        console.log(objSum);
        return objSum;
    }
}

reduce(["hey", "you"]);


// whats possibly throwing it off is that its not account for mixed strings/numbers in an array.

module.exports = reduce;
