function toggleMenu() {
  const menu = document.getElementById('menu-utama');
  if (!menu) return;
  menu.classList.toggle('tampil');
}

function validasiForm(form) {
  alert('Terima kasih, pesan terkirim!');
  form.reset();
  return false;
}
  