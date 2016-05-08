describe('lcd-digits', function () {
    var input;
    var allDigits;

    beforeEach(function () {
        input = '910';
        allDigits = loadAllLcdDigits();
    });

    it('should print correct', function () {

        spyOn(console, 'log');

        printLcd(input);

        var expectText =
            '\n._....._.\n' +
            '|_|..||.|\n' +
            '..|..||_|\n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('splitInput', function () {
    var input;

    beforeEach(function () {
        input = '910';
    });
    it('should print correct', function () {
        var newArray = splitInput(input);

        var expectText = ['9', '1', '0'];

        expect(newArray).toEqual(expectText);
    });
});

describe('buildLcdDigits', function () {
    var newArray;

    beforeEach(function () {
        newArray = ['9', '1', '0'];
    });

    it('should print correct', function () {
        var lcdDigits = buildLcdDigits(newArray);

        var expectText = [
            {num: ['._.', '|_|', '..|']},
            {num: ['...', '..|', '..|']},
            {num: ['._.', '|.|', '|_|']}
        ];

        expect(lcdDigits).toEqual(expectText);
    });
});

describe('', function () {
    var lcdDigits;

    beforeEach(function () {
        lcdDigits = [
            {num: ['._.', '|_|', '..|']},
            {num: ['...', '..|', '..|']},
            {num: ['._.', '|.|', '|_|']}
        ];
    });

    it('should print correct', function () {
        var string = getLcdDigit(lcdDigits);

        var expectText =
            '\n._....._.\n' +
            '|_|..||.|\n' +
            '..|..||_|\n';

        expect(string).toEqual(expectText);
    });
});