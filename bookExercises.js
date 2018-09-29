//Chess board
var charHT = "#";
var charWS = " ";
var size = 8;
var output = "";

//LOOP for all line
for (var i = 0; i < size; i++) {
    //LOOP for each line
    for (var l = 0; l < size; l++) {
        if (i % 2 != 0 && l % 2 != 0) {
            output += charWS;
        } else if (i % 2 != 0 && l % 2 == 0) {
            output += charHT;
        } else if (i % 2 == 0 && l % 2 != 0) {
            output += charHT;
        } else if (i % 2 == 0 && l % 2 == 0) {
            output += charWS;
        }
    }
    //Print the created line at the end of the loop
    console.log(output);
    //clear the variable, otherwise you'll add one line after the other
    output = "";
}

//min function
