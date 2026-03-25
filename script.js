function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const btn = document.getElementById('hamburger');
    links.classList.toggle('open');
    links.classList.toggle('glass');
    btn.textContent = links.classList.contains('open') ? '✕' : '☰';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        const links = document.querySelector('.nav-links');
        const btn = document.getElementById('hamburger');
        links.classList.remove('open');
        links.classList.remove('glass');
        btn.textContent = '☰';
    }
});