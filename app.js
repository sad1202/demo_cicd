function getStatusMessage() {
    return "Hệ thống hoạt động mượt mà!";
}

if (typeof document !== 'undefined') {
    document.getElementById('status').innerText = getStatusMessage();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getStatusMessage };
}