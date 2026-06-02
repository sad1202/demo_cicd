const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./app.js');

test('Kiểm tra hàm add: 5 + 7 phải bằng 12', () => {
    const result = add(5, 7);
    
    // Ép buộc kết quả trả về từ hàm add(5, 17) phải bằng đúng 12
    assert.strictEqual(result, 12);
});