const navSlide = () => {
    const burger = document.querySelector('.box');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    window.onclick = function(event){
        const nav = document.querySelector('.nav-links');
        let menu = document.getElementById('menu');
        let box = document.getElementById('hmbrg');
        let status = false;

        if (event.target == box){
            nav.classList.toggle('nav-active');
            status = true;
            console.log(status);
        }else if (event.target != menu && status == true){
            nav.classList.toggle('nav-active');
            status = false;
        }
    }
}
navSlide();