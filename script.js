const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.reset();
    document.documentElement.style.scrollBehavior = 'auto';
    window.location.hash = "Home";
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
});
function toggleMenu() {
    const menu = document.querySelector('.n-center');
    menu.classList.toggle('active');
}
