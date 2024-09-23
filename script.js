function toggleDarkMode() {
  let isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
}

// On page load

document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});


function bigImg(x) {
  x.style.height = "580px";
  x.style.width = "750px";
}

function normalImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}