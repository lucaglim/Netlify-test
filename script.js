function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const btn = document.getElementById('hamburger');
    links.classList.toggle('open');
    links.classList.toggle('glass');
    btn.textContent = links.classList.contains('open') ? '✕' : '☰';
}