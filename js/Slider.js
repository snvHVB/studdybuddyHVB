const navSlide = () => {
    const burger = document.querySelector('.box');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        burger.style.display = "block";
    });
    window.onclick = function(event) {
        if (event.target == burger) {
            burger.style.display = "none";
        }
    }
}
navSlide();