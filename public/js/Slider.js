const navSlide = () => {
    const burger = document.querySelector('.box');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.style.display = "block";
    });
    window.onclick = function(event) {
        if (event.target != burger) {
            nav.style.display = "none";
        }
    }
}
navSlide();