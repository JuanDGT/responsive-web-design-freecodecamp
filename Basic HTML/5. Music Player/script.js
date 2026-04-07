const header = document.querySelector('header');

// Crear botón de Dark Mode
const darkBtn = document.createElement('button');
darkBtn.textContent = '🌙 Dark Mode';
darkBtn.style.marginTop = '1rem';
darkBtn.style.padding = '8px 12px';
darkBtn.style.border = 'none';
darkBtn.style.borderRadius = '5px';
darkBtn.style.cursor = 'pointer';
darkBtn.style.fontSize = '1rem';
header.appendChild(darkBtn);

// Toggle Dark Mode
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    darkBtn.textContent = '☀️ Light Mode';
  } else {
    darkBtn.textContent = '🌙 Dark Mode';
  }
});