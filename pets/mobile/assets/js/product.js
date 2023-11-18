// Filter

let btnFiltersOppen = document.querySelector(".btn__filters-oppen");
let btnFiltersClose = document.querySelector(".btn__filters-close");
let filtersModal = document.querySelector(".filters__modal");
btnFiltersOppen.addEventListener("click", function () {
    filtersModal.classList.toggle('close')
    body.style.overflowY = "hidden";
});

btnFiltersClose.addEventListener("click", function () {
    filtersModal.classList.toggle('close')
    body.style.overflowY = "";
});

let SideBarOpenlv2Filters = document.querySelectorAll('.SideBarOpen-lv2-filters')
let SideBarCloselv2Filters = document.querySelectorAll('.SideBarClose-lv2-filters')
let sideBarlv2Filters = document.querySelector('.sideBar__lv2-filters')

SideBarOpenlv2Filters.forEach(e => {
    e.addEventListener('click', function(){
        let nextClass = e.nextElementSibling;
        // console.log(nextClass);
        nextClass.classList.toggle('close')
        body.style.overflowY = "hidden"
})

})
SideBarCloselv2Filters.forEach(e => {
    e.addEventListener('click', function(){
        let parentClass = e.parentElement;
        parentClass.classList.toggle('close')
        
        body.style.overflowY = ""
    })
})
