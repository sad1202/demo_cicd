const test = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('./app.js');

test('5 + 7 = 12', () => {
    const result = add(5, 7);
    assert.strictEqual(result, 12);
});
test('10 - 4 = 6', () => {
    const result = subtract(10, 4);
    assert.strictEqual(result, 10);
});