let navSlide = () => {

    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav_links');
    let navLinks = document.querySelectorAll('.nav_links li');

    //toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

    });

    console.log("Burgerslide");


}

navSlide();
