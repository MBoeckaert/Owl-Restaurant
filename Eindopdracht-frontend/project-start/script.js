window.addEventListener('scroll', function (e) {
    var header = document.querySelector('.navigation');
    var sticky = window.scrollY;

    if (sticky >= 30) {
        header.classList.add("sticky");
        console.log('50');
    }
    else {
        header.classList.remove("sticky");
        console.log('scrolled!');
    }
});


const showNav = () => {
    const burger = document.querySelector('.hamburger');
    const dropMenu = document.querySelector('.dropdownMenu');

    burger.addEventListener('click', () => {
        dropMenu.classList.toggle('dropActive');
        console.log('clicke');
    });
}

showNav();

