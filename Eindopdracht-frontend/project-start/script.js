window.addEventListener("scroll", function (e) {
    const header = document.querySelector('nav');
    const sticky = window.scrollY;

    sticky >= 40 ? header.classList.add("sticky") : header.classList.remove("sticky")
});


const showNav = () => {
    const burger = document.querySelector('.hamburger');
    const dropMenu = document.querySelector('.dropdownMenu');

    burger.addEventListener('click', () => {
        dropMenu.classList.toggle('dropActive');
    });
}

showNav();

