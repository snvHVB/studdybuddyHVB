const navSlide = () => {
    const burger = document.querySelector('.box');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    window.onclick = function(event) {
        if (event.target == burger) {
            modal.style.display = "none";
        }
    }
}
navSlide();