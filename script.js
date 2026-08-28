document.addEventListener('DOMContentLoaded', function() {
    generateBarcode();
});

function generateBarcode() {
    const canvas = document.getElementById('barcodeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.fillStyle = '#000';
    let x = 10;
    for (let i = 0; i < 60; i++) {
        const width = Math.random() > 0.5 ? 2 : 4;
        if (Math.random() > 0.3) {
            ctx.fillRect(x, 0, width, 50);
        }
        x += width + 2;
    }
}
function showAlert() {
    alert("ยินดีต้อนรับเข้าสู่เว็บไซต์นามบัตรดิจิทัลของฉัน!");
}
document.addEventListener('DOMContentLoaded', function() {
	generateBarcode();
 
	// 1. ดึง Element ปุ่มสลับธีมจาก HTML
	const themeToggleBtn = document.getElementById('themeToggleBtn');
 	// 2. ตรวจสอบว่ามีปุ่มจริง แล้วผูก Event Listener แบบคลิก
	if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
        	// 3. สลับคลาส 'dark-mode' ที่แท็ก <body>
            document.body.classList.toggle('dark-mode');
        	// แสดงสถานะใน Developer Tools Console
        	console.log('สลับโหมดการแสดงผลสำเร็จ!');
    	});
	}
})
