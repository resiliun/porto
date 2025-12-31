/* 
   File: script-proteksi.js
   Proteksi semua gambar dalam class gallery-grid
*/

// Mengambil semua elemen dengan class gallery-grid
const galleryImages = document.querySelectorAll('.gallery-item');

// Melakukan perulangan (loop) untuk menerapkan proteksi ke setiap gambar
galleryImages.forEach((img) => {
    
    // 1. Mematikan menu klik kanan
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

    // 2. Mematikan fitur Drag (mencegah gambar ditarik keluar browser)
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    }, false);

    // 3. Tambahan: Mencegah pointer-events saat klik lama (opsional untuk mobile)
    img.style.webkitTouchCallout = 'none';
});
