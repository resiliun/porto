function geserGallery(jarak) {
    // 1. Cari elemen gallery-nya
    const gallery = document.querySelector('.gallery-grid');

    // 2. Cek apakah elemennya ketemu
    if (gallery) {
        // 3. Perintahkan untuk geser ke kiri atau kanan
        gallery.scrollBy({
            left: jarak,
            behavior: 'smooth' // Membuat gerakan geser jadi halus
        });
    } else {
        // Jika class di HTML bukan 'gallery-grid', pesan ini akan muncul di F12
        console.error("Gagal geser: Elemen '.gallery-grid' tidak ditemukan.");
    }
}

// --- BAGIAN 2: CUSTOM CURSOR ---
    const cursorContainer = document.getElementById('cursor-container');
    const cursorImg = document.getElementById('cursor-img');
    
    if (cursorContainer) {
        // Aktifkan kursor kustom hanya jika elemennya ada
        cursorContainer.style.display = 'block';
        document.body.style.cursor = 'none';

        const imgNormal = 'img/cursor_normal.png';
        const imgClick = 'img/cursor_select.png';

        document.addEventListener('mousemove', (e) => {
            cursorContainer.style.left = e.clientX + 'px';
            cursorContainer.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursorImg.src = imgClick;
            cursorContainer.style.transform = 'translate(-50%, -50%) scale(0.9)';
        });

        document.addEventListener('mouseup', () => {
            cursorImg.src = imgNormal;
            cursorContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }