// 1. Hàm tính tổng hai số thuần túy
function add(a, b) {
    return a + b; 
    // Mẹo test: Nếu bạn muốn thử cho CI bị lỗi (báo đỏ), hãy sửa dấu + thành dấu - ở đây
}

// 2. Hiển thị kết quả ra giao diện nếu chạy trên Trình duyệt
if (typeof document !== 'undefined') {
    const ketQua = add(5, 7); // Thử tính 5 + 7
    document.getElementById('math-result').innerText = `Kết quả phép tính 5 + 7 là: ${ketQua}`;
}

// 3. Xuất hàm ra cho file test sử dụng trong môi trường Node.js (CI)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add };
}