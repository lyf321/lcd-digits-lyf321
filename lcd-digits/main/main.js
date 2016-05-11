function printLcd(input) {
    var digitArray = splitInput(input);
    var lcdDigits = matchLcdDigits(digitArray);
    var string = getLcdDigit(lcdDigits);
    console.log(string);
}

function splitInput(input) {

    return input.split("");
}

function matchLcdDigits(digitArray) {
    var allDigits = loadAllLcdDigits();
    var lcdDigits = [];

    digitArray.forEach(function (array) {
        for (var i = 0; i < allDigits.length; i++) {
            if (array === allDigits[i].name) {
                lcdDigits.push({num: allDigits[i].num});
            }
        }
    });

    return lcdDigits;
}

function getLcdDigit(lcdDigits) {
    var string = '\n';

    for (var i = 0; i < lcdDigits[0].num.length; i++) {
        lcdDigits.forEach(function (digit) {
            string += digit.num[i];
        });
        string += '\n';
    }
    
    return string;
}
