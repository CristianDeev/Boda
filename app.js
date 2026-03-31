const btn = document.getElementById('selloBtn');
const container = document.querySelector('.envelope-container');

const overlay = document.createElement('div');
overlay.style.cssText = `
  position: fixed; inset: 0; z-index: 999;
  background: #f4efe6;
  opacity: 0; pointer-events: none;
  transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1);
`;
document.body.appendChild(overlay);

btn.addEventListener('click', () => {
  if (container.classList.contains('opening')) return;

  container.classList.add('opening');

  setTimeout(() => {
    overlay.style.pointerEvents = 'all';
    overlay.style.opacity = '1';
  }, 900);

  setTimeout(() => {
    window.location.href = 'html/invitacion.html';
  }, 2100);
});