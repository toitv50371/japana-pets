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

// section 15

let userTexts = document.getElementsByClassName('section__15-user-text')
let userPics = document.getElementsByClassName('section__15-user')
function showReview(){
    for(var userPic of userPics){
        userPic.classList.remove('active-pic')
    }
    for(var userText of userTexts){
        userText.classList.remove('active-text')  
    }
    let i = Array.from(userPics).indexOf(event.target)
    userPics[i].classList.add('active-pic')
    userTexts[i].classList.add('active-text')
}

