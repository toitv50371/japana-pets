const body = document.body;
// Cart
let cartToggle = document.querySelector('.cart__toggle');
let cartToggleClose = document.querySelector('.cart__icon-close');
let cartModal = document.querySelector('.cart__modal');

cartToggle.addEventListener('click', function () {
    cartModal.classList.toggle('close');
    body.style.overflowY = 'hidden';
});
cartToggleClose.addEventListener('click', function () {
    cartModal.classList.toggle('close');
    body.style.overflowY = '';
});

// Sidebar
let sidebarOpen = document.querySelector('.sidebar__open');
let sidebarClose = document.querySelector('.sidebar__close');
let sidebarModal = document.querySelector('.sidebar__modal');
sidebarOpen.addEventListener('click', function () {
    sidebarModal.classList.toggle('close');
    body.style.overflowY = 'hidden';
    sidebarlv2.classList.remove('open');
});
sidebarClose.addEventListener('click', function () {
    sidebarModal.classList.toggle('close');
    body.style.overflowY = '';
    sidebarlv2.classList.remove('open');
});
// Sidebar lv 2
const sidebarlv2 = document.querySelector('.sideBar__lv2');
const sidebarOpenlv2 = document.querySelectorAll('.sideBar__open-lv2');
const sidebarCloselv2 = document.querySelectorAll('.sideBar__close-lv2');

sidebarOpenlv2.forEach((e) => {
    e.addEventListener('click', function () {
        let nextClass = e.nextElementSibling;
        nextClass.classList.toggle('open');
    });
});

sidebarCloselv2.forEach((e) =>
    e.addEventListener('click', function (e) {
        let parent = e.target.parentElement.parentElement;
        parent.classList.toggle('open');
    })
);
