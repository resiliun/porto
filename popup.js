/**
 * Fungsi ini berfungsi sebagai saklar (toggle) untuk menampilkan 
 * dan menyembunyikan menu pop-up.
 * Fungsi ini dipanggil oleh atribut onclick="toggleMenu()" di tombol utama HTML.
 */
function toggleMenu() {
  // Mencari semua elemen <a> yang memiliki kelas 'popup'
  const options = document.querySelectorAll('.popup');
  
  // Melakukan iterasi dan menambahkan/menghapus kelas 'visible'
  options.forEach(element => {
    element.classList.toggle('visible'); 
  });
}

/**
 * Event listener untuk menutup menu secara otomatis 
 * saat pengguna mengklik di area mana pun di luar container FAB.
 */
document.addEventListener('click', function(event) {
  // Mencari elemen container utama dari FAB
  const fabContainer = document.querySelector('.fab-container');
  
  // Memeriksa apakah area yang diklik BUKAN bagian dari fabContainer
  if (!fabContainer.contains(event.target)) {
    const options = document.querySelectorAll('.popup');
    options.forEach(element => {
      // Pastikan menu tertutup dengan menghapus kelas 'visible'
      element.classList.remove('visible');
    });
  }
});

// --- fab.js (atau file JS baru Anda) ---

// Fungsi toggleMenu() dan event listener document.addEventListener('click', ...) 
// yang sudah ada tetap di sini di bagian atas file.
// ... (letakkan kode FAB yang sudah berfungsi di sini) ...

/**
 * Event listener untuk menutup menu secara otomatis 
 * saat pengguna mengklik di area mana pun di luar container FAB.
 */
document.addEventListener('click', function(event) {
  const fabContainer = document.querySelector('.fab-container');
  if (!fabContainer.contains(event.target)) {
    const options = document.querySelectorAll('.popup');
    options.forEach(element => {
      element.classList.remove('visible');
    });
  }
});


// =============================================================
// --- FUNGSI BARU UNTUK MENYEMBUNYIKAN FAB DI SECTION #cover ---
// =============================================================

// 1. Temukan elemen section #cover dan container FAB
const coverSection = document.querySelector('#cover');
const fabContainer = document.querySelector('.fab-container');

console.log("Elemen #cover ditemukan:", coverSection); 
console.log("Elemen .fab-container ditemukan:", fabContainer); 

if (coverSection && fabContainer) {
  // 2. Buat Observer baru
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Jika section #cover terlihat penuh di layar
      if (entry.isIntersecting) {
        // Sembunyikan FAB dengan menambahkan kelas 'hidden'
        fabContainer.classList.add('hidden');
      } else {
        // Tampilkan FAB kembali saat keluar dari section #cover
        fabContainer.classList.remove('hidden');
      }
    });
  }, {
    root: null, // Mengamati relatif terhadap viewport browser
    threshold: 0.2 // Memicu saat 20% dari #cover terlihat di layar
  });

  // 3. Mulai mengamati section #cover
  observer.observe(coverSection);
}