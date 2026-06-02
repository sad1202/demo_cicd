const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./app.js');

test('Kiểm tra hàm add: 5 + 7 phải bằng 12', () => {
    const result = add(5, 7);
    assert.strictEqual(result, 12);
});