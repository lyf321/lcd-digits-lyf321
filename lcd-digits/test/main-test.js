describe('lcd-digits', function () {
    var input;
    var allDigits;

    beforeEach(function () {
        input = '910';
        allDigits = loadAllLcdDigits();
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        printLcd(input);

        var expectText =
            '\n._....._.\n' +
            '|_|..||.|\n' +
            '..|..||_|\n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('unit test', function () {

    describe('splitInput', function () {
        var input;

        beforeEach(function () {
            input = '910';
        });
        it('should return correct digitArray', function () {
            var digitArray = splitInput(input);

            var expectText = ['9', '1', '0'];

            expect(digitArray).toEqual(expectText);
        });
    });

    describe('matchLcdDigits', function () {
        var digitArray;

        beforeEach(function () {
            digitArray = ['9', '1', '0'];
        });

        it('should return correct lcdDigits', function () {
            var lcdDigits = matchLcdDigits(digitArray);

            var expectText = [
                {num: ['._.', '|_|', '..|']},
                {num: ['...', '..|', '..|']},
                {num: ['._.', '|.|', '|_|']}
            ];

            expect(lcdDigits).toEqual(expectText);
        });
    });

    describe('getLcdDigit', function () {
        var lcdDigits;

        beforeEach(function () {
            lcdDigits = [
                {num: ['._.', '|_|', '..|']},
                {num: ['...', '..|', '..|']},
                {num: ['._.', '|.|', '|_|']}
            ];
        });

        it('should return correct string', function () {
            var string = getLcdDigit(lcdDigits);

            var expectText =
                '\n._....._.\n' +
                '|_|..||.|\n' +
                '..|..||_|\n';

            expect(string).toEqual(expectText);
        });
    });

});