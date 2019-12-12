// document.querySelector('.hamburger').addEventListener('click', function ('togglez') {
//     console.log('clicked hamburger');
//     var active = document.querySelector('.dropdownMenu');
//     if (active.style.visibility === 'hidden') {
//         active.style.visibility === 'visible';
//         console.log('clicked');
//     } else {
//         active.style.visibility === 'hidden';
//         console.log('closed');
//     }
// });

// function ('togglez');

const showNav = () => {
    const burger = document.querySelector('.hamburger');
    const dropMenu = document.querySelector('.dropdownMenu');

    burger.addEventListener('click', () => {
        dropMenu.classList.toggle('dropActive');
        console.log('clicke');
    });
}

showNav();