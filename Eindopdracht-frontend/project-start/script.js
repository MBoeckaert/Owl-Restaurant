const showNav = () => {
    const burger = document.querySelector('.hamburger');
    const dropMenu = document.querySelector('.dropdownMenu');

    burger.addEventListener('click', () => {
        dropMenu.classList.toggle('dropActive');
        console.log('clicke');
    });
}

showNav();
