//Chess board
var charHT = "#";
var charWS = " ";
var size = 8;
var output = "";

//LOOP for all line
for (var i = 0; i < size; i++) {
    //LOOP for each line
    for (var l = 0; l < size; l++) {
        if (i % 2 !== 0 && l % 2 !== 0) {
            output += charWS;
        } else if (i % 2 !== 0 && l % 2 === 0) {
            output += charHT;
        } else if (i % 2 === 0 && l % 2 !== 0) {
            output += charHT;
        } else if (i % 2 === 0 && l % 2 === 0) {
            output += charWS;
        }
    }
    //Print the created line at the end of the loop
    console.log(output);
    //clear the variable, otherwise you'll add one line after the other
    output = "";
}

//min function
function min(param1, param2) {
    if (param1 < param2) {
        return param1;
    } else if (param2 < param1) {
        return param2;
    } else {
        return null;
    }
}

console.log(min(3, 5));
console.log(min(5, 3));
console.log(min(3, 3));

//recursion
function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0) {
        return isEven(num + 2);
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-2));

//count Bs
function countChar(character, word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === character) {
            count++;
        }
    }
    return count;
}

console.log(countChar("m", "BabaBaBum"));

//range sum
function range(start, end, step) {
    if (step == null) {
        step = 1;
    }
    var retArr = [];
    if (start > end && step > 0) {
        for (var i = start; i >= end; i -= step) {
            retArr.push(i);
        }
    } else {
        if (start > end) {
            for (var i = start; i >= end; i += step) {
                retArr.push(i);
            }
        } else {
            for (var i = start; i <= end; i += step) {
                retArr.push(i);
            }
        }
    }
    return retArr;
}

function sum(rangeArray) {
    var sum = 0;
    for (var i = 0; i < rangeArray.length; i++) {
        sum += rangeArray[i];
    }
    return sum;
}

console.log(range(5, 2, -1));
console.log(range(5, 2, 1));
console.log(range(2, 5, 1));

//reversing array
function reverseArray(givenArray) {
    var retArray = [];
    for (var i = givenArray.length - 1; i >= 0; i--) {
        retArray.push(givenArray[i]);
    }
    return retArray;
}

var arrayParam = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayParam));

function reverseArrayInPlace(givenArray) {
    var l = givenArray.length;
    for (var i = 1; i < l; i++) {
        console.log(givenArray);
        givenArray.unshift(givenArray[i]);
        givenArray.splice(i + 1, 1);
    }
    return givenArray;
}