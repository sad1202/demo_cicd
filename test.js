const test = require('node:test');
const assert = require('node:assert');
const { getStatusMessage } = require('./app.js');

test('Kiểm tra hàm getStatusMessage', () => {
    const message = getStatusMessage();
    assert.strictEqual(message, "Hệ thống hoạt động mượt mà!");
});