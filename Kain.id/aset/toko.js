let i = 0;
const s = () => document.querySelectorAll('.slide');

function next(){
  const all = s();
  if (!all.length) return;
  all[i].classList.remove('aktif');
  i = (i + 1) % all.length;
  all[i].classList.add('aktif');
}

setInterval(next, 2000);
