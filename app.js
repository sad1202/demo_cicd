function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
// if (typeof document !== 'undefined') {
//     const ketQua = add(5, 7);
//     document.getElementById('math-result').innerText = `Kết quả phép tính 5 + 7 là: ${ketQua}`;
// }

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, subtract };
}