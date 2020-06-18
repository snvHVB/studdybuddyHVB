let box = document.querySelector('.box');
let menu = document.querySelector('.nav-links');
let status = false;
window.onclick = function(event){
    const nav = document.querySelector('.nav-links');

    if (event.target == box){
        nav.classList.toggle('nav-active');
        status = true;
        console.log(status);
    }else if (event.target != menu && status == true){
        nav.classList.toggle('nav-active');
        status = false;
    }
}