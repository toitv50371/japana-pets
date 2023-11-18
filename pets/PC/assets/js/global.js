const body = document.body;
// Cart
let cartToggle = document.querySelector(".cart__toggle");
let cartToggleClose = document.querySelector(".cart__icon-close");
let cartModal = document.querySelector(".cart__modal");

cartToggle.addEventListener("click", function () {
    cartModal.classList.toggle('d-none')
    body.style.overflowY = "hidden";
});
cartToggleClose.addEventListener("click", function () {
    cartModal.classList.toggle('d-none')
    body.style.overflowY = "";
});
// Sidebar
let sidebar = document.querySelector('.sidebar')
let sidebarSubmenu = document.querySelector('.sidebar__submenu')
sidebar.addEventListener('click', () => {
    sidebarSubmenu.classList.toggle('d-none')
})