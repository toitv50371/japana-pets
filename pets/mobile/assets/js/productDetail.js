let pdDetailSizes = document.querySelectorAll('.pdDetail__sizes')
let pdDetailColor = document.querySelectorAll('.pdDetail__color')
pdDetailSizes.forEach(element => {
    element.addEventListener('click', function() {
        pdDetailSizes.forEach(event => event.classList.remove('active'))
        this.classList.add('active')
    })
})

pdDetailColor.forEach(element => {
    element.addEventListener('click', function() {
        pdDetailColor.forEach(event => event.classList.remove('active__color'))
        this.classList.add('active__color')
    })
})