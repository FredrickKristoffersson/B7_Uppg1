import { describe, expect, test, xtest } from '@jest/globals';
import { secretWord, guessWord } from './main';
// jag kan inte lägga in dessa ovanför, är det för att dessa är funktioner? ovanför är variabler.
import lowCase from './main';
import createArray from './main';

// testar minsta gränsvärde för längden på det "hemliga" ordet
describe('Secret word length match', () => {
    test('if guess word has equal amount of letters as secretWord', () => {
        expect(guessWord.length).toEqual(secretWord.length);
    });
});

// testar om variabel består av enbart lowercase
describe('Variable lowercase', () => {
    test('if our string has lowercases', () => {
        const expectedValue = "testar";
        expect(lowCase(guessWord)).toBe(expectedValue);
    });
});

// Har vi skapat en array av vårat gissade värde?
// denna får jag object-typ på i main-filen men inte här?
// vad jag läst så kan inte Jest inte detta?
describe('Variable to array', () => {
    test('if our input value has changed to an array', () => {
        const asdf = guessWord;
        const output = createArray(asdf);
        expect(typeof output === "object").toBe(true);
    });
});