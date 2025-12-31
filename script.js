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