import { describe, expect, test, xtest } from '@jest/globals';
import secretWord from './main.js';
import input from './main.js';

describe('Variable length', () => {
    test('Variable length equal to secret words length', () => {
        const output = secretWord.length;
        expect(output).toEqual(input.length);
    });
});
// Presenteras hur många bokstäver det hemliga ordet har?
// Sparas input-värde som variabel?
// Matchar input-värdet med värdet för den sparade variabeln?
// förändras input-variabel från string till array?
// Matchar något av bokstäverna, bokstäverna i det hemliga ordet?
