window.addEventListener("scroll", function (e) {
    const header = document.querySelector('nav');
    const sticky = window.scrollY;

    sticky >= 40 ? header.classList.add("sticky") : header.classList.remove("sticky")
});

// const burger = document.querySelector('.hamburger');
// burger.addEventListener('click', function (e) {
//     alert('test');
//     burger.preventDefault();
// })


const showNav = () => {
    console.log('showNav');

    const burger = document.querySelector('.hamburger');
    const dropMenu = document.querySelector('.dropdownMenu');
    console.log('dropMenu', dropMenu);


    burger.addEventListener('click', (e) => {
        console.log('burger');
        dropMenu.classList.toggle('dropActive');
        // e.preventDefault();
    })
}

showNav();

