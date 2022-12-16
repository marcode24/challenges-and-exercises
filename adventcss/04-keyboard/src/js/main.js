const d = document;
const chars = d.querySelectorAll('.char');
const specialChars = d.querySelectorAll('.special');

let typed = false;
let activeChar = 0;

setInterval(() => !typed && changeChar() , 1500);

function changeChar() {
  chars[activeChar].classList.remove('active');
  const random = Math.floor(Math.random() * chars.length);
  activeChar = random;
  chars[random].classList.add('active');
}

d.addEventListener('keydown', e => {
  if (e.key.toUpperCase() === chars[activeChar].textContent) typed = true;
});

specialChars.forEach(specialChar => {
  specialChar.addEventListener('click', () => typed = false);
});
