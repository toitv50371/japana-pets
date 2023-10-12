



/** Brand **/ 

var slider = document.getElementById("myRange");
var output = document.getElementById("value__price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.brandSection__2-dropBtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




/** End Brand **/ 

/** Product Detail **/ 

let activeImg = document.querySelectorAll('.pdDetail__img-slide-detail')
activeImg.forEach(event => {
    event.addEventListener('click', function(){
        activeImg.forEach(event => event.classList.remove('active'))
        this.classList.add('active')    
        console.log('test')
    })
})

const imgs = document.querySelectorAll('.img__item a')
const imgBtns = [...imgs]
let imgId = 1
imgBtns.forEach( imgItem => {
    imgItem.addEventListener('click', function(event){
        event.preventDefault()
        imgId = imgItem.dataset.id 
        slideImage()
    })
})
function slideImage(){
    const displayWidth = document.querySelector('.img__showcase img:first-child').clientWidth
    document.querySelector('.img__showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`
}


/** End Product Detail **/ 

// Section feedback

let userTexts_detail = document.getElementsByClassName('section__feedback-user-text')
let userPics_detail = document.getElementsByClassName('section__feedback-user')
function showReviewpdDetail(){
    for(var userPic of userPics_detail){
        userPic.classList.remove('active-pic')
    }
    for(var userText of userTexts_detail){
        userText.classList.remove('active-text')  
    }
    let i = Array.from(userPics_detail).indexOf(event.target)
    userPics_detail[i].classList.add('active-pic')
    userTexts_detail[i].classList.add('active-text')
}




/** Index **/ 

// Section 6
let section6Btn = document.querySelectorAll('.section__6-pag-btn')
section6Btn.forEach(event => {
    event.addEventListener('click', function(){
        section6Btn.forEach(event => event.classList.remove('section__6-active'))
        this.classList.add('section__6-active')
    })
})




// 

function section11slide(){
    let slideValue = document.getElementById('section__11-slider').value
    document.getElementById('section__11-img-a').style.clipPath = 'polygon(0 0,' + slideValue + '% 0, ' + slideValue + '% 100%, 0 100%'
}


/** End Index **/ 

